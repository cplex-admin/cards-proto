angular
.module("cards")
.controller('TabsCtrl', function($scope, $ionicViewSwitcher, $state, $rootScope, $timeout, $ionicHistory) {

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

  $scope.play = function(){
    var el = document.getElementById('tabs-disap-bnt');
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
      var el = document.getElementById('tabs-disap-bnt');
      el.style.display = 'none';
    }
    if (fromState.name == 'cards.list' && toState.name == 'tabs.chats') {
      $scope.play();
    }
  });

  $scope.go = function(path) {
    $ionicViewSwitcher.nextDirection('none');
    $state.go(path);
  };

})

;