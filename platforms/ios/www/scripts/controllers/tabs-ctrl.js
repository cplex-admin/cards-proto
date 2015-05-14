angular
.module("cards")
.controller('TabsCtrl', function($scope, $ionicViewSwitcher, $state, $rootScope, $timeout) {

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

  $rootScope.$on( "$ionicView.enter", function(scopes, states) {
    if (states.stateName == 'tabs.chats') {
      var el = document.getElementById('disap-bnt');
      el.style[TRANSITION] = 'opacity 1s';
      el.classList.add('hided');
      $timeout(function() {
        el.style.display = 'none';
      }, 1000);
    }
  });

  $scope.go = function(path) {
    if (path == 'tabs.chats') {
      return;
    }

    $ionicViewSwitcher.nextDirection('none');
    $state.go(path);

    if (path != 'tabs.notif') {
      var el = document.getElementById('disap-bnt');
      el.style.display = 'block';
      el.classList.remove('hided');
    }
  };

})

;