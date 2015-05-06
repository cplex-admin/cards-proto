angular
.module("cards")
.controller('NotifCtrl', function($scope, Cards) {

  $scope.items = [];

  $scope.fnames  = [ 'Игорь', 'Фарход', 'Алексей', 'Дмитрий', 'Петр', 'Сергей' ];
  $scope.lnames  = [ 'Иванов', 'Петров', 'Сидоров', 'Герасименко', 'Шадиев', 'Чингуль' ];
  $scope.actions = [ 'поделился Вашей угадайкой', 'оценил Вашу фотографию', 'угадал три Ваших угадайки' ];
  $scope.months  = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

  $scope.$on('$ionicView.enter', function() {
    // check size and clean up
    if ($scope.items.length > 10) {
      $scope.items = [$scope.generateItem()];
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
  });

  $scope.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min )) + min;
  };

  $scope.generateName = function() {
    return $scope.fnames[$scope.getRandomInt(0, $scope.fnames.length )] + ' ' + $scope.lnames[$scope.getRandomInt(0, $scope.fnames.length)];
  };

  $scope.generateDate = function() {
    return $scope.getRandomInt(1, 28) + ' '
            + $scope.months[$scope.getRandomInt(0, $scope.months.length )]+ ' '
            + $scope.getRandomInt(0, 24) + ':' + $scope.getRandomInt(0, 59);
  };

  $scope.generateItem = function() {
    var cardsLength = Cards.data.length;
    var item = {
      avatar: Cards.data[$scope.getRandomInt(0, cardsLength)].avatar,
      action: $scope.actions[$scope.getRandomInt(0, $scope.actions.length)],
      name: $scope.generateName(),
      date: $scope.generateDate(),
      imgs: [Cards.data[$scope.getRandomInt(0, cardsLength)].pictures[0]],
      isNew: true
    };
    return item;
  };

})

;