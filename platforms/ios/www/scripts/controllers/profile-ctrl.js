angular
.module("cards")
.controller('ProfileCtrl', function($scope, $state, $ionicViewSwitcher) {

  $scope.profile = {
    avatar: 'img/avatars/270018_55300e9b062e2.jpg',
    pubs: 20,
    subscribers: 2,
    subscriptions: 2,
  };

  $scope.items = [
    {
        question: 'To drink?'
      , picture: 'img/pics/8-1.jpg'
      , popularity: 'Популярно в твоем городе'
      , stat: {
          total: 61
        , today: 5
      }
    }
    , {
        question: 'Кто создал человека?'
      , picture: 'img/pics/9-1.jpg'
      , popularity: 'Популярно рядом с тобой'
      , stat: {
          total: 25
        , today: 1
      }
    }
    , {
        question: 'Что я предпочту?'
      , picture: 'img/pics/10-1.jpg'
      , stat: {
        total: 125
      }
    }
    , {
        question: 'Люблю ли я праздновать день рождения?'
      , picture: 'img/pics/11-1.jpg'
      , stat: {
        total: 12
      }
    }
  ];

  $scope.go = function(path) {
    $ionicViewSwitcher.nextDirection('none');
    $state.go(path);
  };

})
;