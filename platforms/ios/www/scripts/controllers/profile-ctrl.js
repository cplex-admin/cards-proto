angular
.module("cards")
.controller('ProfileCtrl', function($scope, $state, $ionicViewSwitcher, $timeout) {
  
  // Get transform origin poly
  var d = document.createElement('div');
  var transitionKeys = ['webkitTransition', 'transition', '-webkit-transition', 'webkit-transition',
              '-moz-transition', 'moz-transition', 'MozTransition', 'mozTransition'];
  var TRANSITION = 'webkitTransition';
  for(var i = 0; i < transitionKeys.length; i++) {
    if(d.style[transitionKeys[i]] !== undefined) {
      TRANSITION = transitionKeys[i];
      break;
    }
  }

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

  $scope.play = function(){
    var el = document.getElementById('profile-disap-bnt');
    el.style.display = 'inline';
    el.classList.remove('hided');
    $timeout(function() {
      el.style[TRANSITION] = 'opacity 1s';
      el.classList.add('hided');
      $timeout(function() {
        el.style.display = 'none';
      }, 1000);
    }, 1);
  };

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if (fromState.name == '') {
      var el = document.getElementById('profile-disap-bnt');
      el.style.display = 'none';
    }
    if (fromState.name == 'cards.list' && toState.name == 'profile') {
      $scope.play();
    }
  });

})
;