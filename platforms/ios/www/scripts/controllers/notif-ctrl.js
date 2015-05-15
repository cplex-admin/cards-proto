angular
.module("cards")
.controller('NotifCtrl', function($scope, Cards, $filter, $ionicLoading, $timeout) {

  $scope.subsCount = 2;
  $scope.sortByPeople = true;
  $scope.items = [];

  $scope.fnames  = [ 'Игорь', 'Фарход', 'Алексей', 'Дмитрий', 'Петр', 'Сергей' ];
  $scope.lnames  = [ 'Иванов', 'Петров', 'Сидоров', 'Герасименко', 'Шадиев', 'Чингуль' ];
  $scope.actions = [ 'поделился Вашей угадайкой', 'оценил Вашу фотографию', 'угадал три Ваших угадайки' ];
  $scope.months  = [ 'янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек' ];

  $scope.$on('$ionicView.enter', function() {
    // check size and clean up
    if ($scope.items.length > 15 || $scope.items.length == 0) {
      var item = $scope.generateItem();
      item.date = new Date();
      item.day = $scope.today;
      item.isFriend = 1;
      $scope.items = [item];
    }

    // mark old
    for (var i = 0; i < $scope.items.length; i++) {
      $scope.items[i].isNew = false;
    }

    // generate new
    var n = $scope.getRandomInt(1, 4);
    for (var i = 0; i < n; i++) {
      $scope.items.unshift($scope.generateItem());
    }

    $scope.items = $filter('orderBy')($scope.items, '-date');
    $scope.items[0].isNew = true;
    $scope.items[1].isNew = true;
  });

  $scope.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min )) + min;
  };

  $scope.generateName = function() {
    return $scope.fnames[$scope.getRandomInt(0, $scope.fnames.length )] + ' ' + $scope.lnames[$scope.getRandomInt(0, $scope.fnames.length)];
  };

  $scope.generateDate = function() {
    var start = new Date(2015, 4, 3),
        end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  $scope.generateItem = function() {
    var cardsLength = Cards.data.length;
    var actionIdx = $scope.getRandomInt(0, $scope.actions.length);
    var date = $scope.generateDate();
    var item = {
      avatar: Cards.data[$scope.getRandomInt(0, cardsLength)].avatar,
      action: $scope.actions[actionIdx],
      actionIdx: actionIdx,
      name: $scope.generateName(),
      date: date,
      day: date.getDate(),
      imgs: [Cards.data[$scope.getRandomInt(0, cardsLength)].pictures[0]],
      isNew: false,
      isFriend: $scope.getRandomInt(0, 2)
    };
    if (item.actionIdx == 2) {
      item.imgs.push(Cards.data[$scope.getRandomInt(0, cardsLength)].pictures[0]);
      item.imgs.push(Cards.data[$scope.getRandomInt(0, cardsLength)].pictures[0]);
    }
    return item;
  };

  $scope.sort = ['isFriend', '-date'];
  $scope.filter0 = {isFriend: 1};
  $scope.filter1 = {isFriend: 0};
  $scope.today = new Date().getDate();

  $scope.toggleSort = function() {
    var overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.classList.add('overlay');
    overlay.innerHTML = '<div class="wrapper"><button onclick="sortFriends()" class="button button-light" id="friends">В начале друзья</button><button onclick="sortNew()" class="button button-light" id="new">В начале новые</button><button onclick="sortCancel()" class="button button-light" id="cancel">Отмена</button></div>';
    document.body.appendChild(overlay);
  }

  $scope.sortByNew = function() {
    $timeout(function(){
      $scope.sort = ['-date', 'isFriend'];
      $scope.filter0 = {day: $scope.today};
      $scope.filter1 = {day: '!' + $scope.today};
    });
  };

  $scope.sortByFriends = function() {
    $timeout(function(){
      $scope.sort = ['isFriend', '-date'];
      $scope.filter0 = {isFriend: 1};
      $scope.filter1 = {isFriend: 0};
    });
  };

})

;

function sortFriends() {
  sortCancel();
  var el = document.getElementsByClassName('item')[0];
  var scope = angular.element(el).scope();
  scope.sortByFriends();
}

function sortNew() {
  sortCancel();
  var el = document.getElementsByClassName('item')[0];
  var scope = angular.element(el).scope();
  scope.sortByNew();
}

function sortCancel() {
  var el = document.getElementById('overlay');
  el.parentNode.removeChild(el);
}