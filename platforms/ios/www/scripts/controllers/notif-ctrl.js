angular
.module("cards")
.controller('NotifCtrl', function($scope, Cards, $filter) {

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
    var date = $scope.generateDate();
    var item = {
      avatar: Cards.data[$scope.getRandomInt(0, cardsLength)].avatar,
      action: $scope.actions[$scope.getRandomInt(0, $scope.actions.length)],
      name: $scope.generateName(),
      date: date,
      day: date.getDate(),
      imgs: [Cards.data[$scope.getRandomInt(0, cardsLength)].pictures[0]],
      isNew: false,
      isFriend: $scope.getRandomInt(0, 2)
    };
    return item;
  };

  $scope.sort = ['isFriend', '-date'];
  $scope.filter0 = {isFriend: 1};
  $scope.filter1 = {isFriend: 0};
  $scope.today = new Date().getDate();
  $scope.toggleSort = function() {

    if ($scope.sort[0] == 'isFriend') {
      $scope.sort = ['-date', 'isFriend'];
      $scope.filter0 = {day: $scope.today};
      $scope.filter1 = {day: '!' + $scope.today};
    } else {
      $scope.sort = ['isFriend', '-date'];
      $scope.filter0 = {isFriend: 1};
      $scope.filter1 = {isFriend: 0};
    }
  };

})

;