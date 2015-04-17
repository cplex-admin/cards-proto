(function(ionic) {

  // Get transform origin poly
  var d = document.createElement('div');
  var transformKeys = ['webkitTransformOrigin', 'transform-origin', '-webkit-transform-origin', 'webkit-transform-origin',
              '-moz-transform-origin', 'moz-transform-origin', 'MozTransformOrigin', 'mozTransformOrigin'];

  var TRANSFORM_ORIGIN = 'webkitTransformOrigin';
  for(var i = 0; i < transformKeys.length; i++) {
    if(d.style[transformKeys[i]] !== undefined) {
      TRANSFORM_ORIGIN = transformKeys[i];
      break;
    }
  }

  var transitionKeys = ['webkitTransition', 'transition', '-webkit-transition', 'webkit-transition',
              '-moz-transition', 'moz-transition', 'MozTransition', 'mozTransition'];
  var TRANSITION = 'webkitTransition';
  for(var i = 0; i < transitionKeys.length; i++) {
    if(d.style[transitionKeys[i]] !== undefined) {
      TRANSITION = transitionKeys[i];
      break;
    }
  }



// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})


.controller('CardsCtrl', function($scope) {
  $scope.cards = [{
    title: 'Swipe down to clear the card',
    images: ['img/pic.png', 'img/pic.png']
  }, {
    title: 'Where is this?',
    image: 'img/pic.png'
  }, {
    title: 'What kind of grass is this?',
    image: 'img/pic2.png'
  }, {
    title: 'What beach is this?',
    image: 'img/pic3.png'
  }, {
    title: 'What kind of clouds are these?',
    image: 'img/pic4.png'
  }];

  setTimeout(function() {  
    $scope.el = angular.element(document.querySelector('.qcard:first-child'))[0];
    $scope.bindEvents();
  }, 200);

  $scope.bindEvents = function() {
    var self = $scope;

    ionic.onGesture('drag', function(e) {
      ionic.requestAnimationFrame(function() { self._doDrag(e) });
    }, $scope.el);

    ionic.onGesture('dragend', function(e) {
      ionic.requestAnimationFrame(function() { self._doDragEnd(e) });
    }, $scope.el);
  };

  $scope._doDrag = function(e) {
    $scope.y = (e.gesture.deltaY * 0.7);

    if($scope.y < 0) {
      $scope.el.style[ionic.CSS.TRANSFORM] = 'translateY(' + $scope.y  + 'px)';
    }
  };

  $scope._doDragEnd = function(e) {
    this.transitionOut(e);
  };

  $scope.expand = function() {
    $scope.y = -1;
    $scope.transitionOut();
  };

  $scope.transitionOut = function() {
      var self = $scope;

      if($scope.y < 0) {
        $scope.el.style[TRANSITION] = '-webkit-transform 0.2s ease-in-out';
        $scope.el.style[ionic.CSS.TRANSFORM] = 'translateY(0px)';
        
        $($scope.el).animate({
          marginTop: "0",
          marginLeft: "0",
          height: "100%",
          width: "100%",
          borderRadius: 0,
        }, 150 );

        setTimeout(function() {
          self.el.style[TRANSITION] = 'none';
          $($scope.el).find('input')[0].focus();
        }, 200);
      } else {
        // $scope.el.parentNode.style[TRANSITION] = '-webkit-transform 0.2s ease-in-out';
        // $scope.el.parentNode.style[ionic.CSS.TRANSFORM] = 'translateX(' + (-$scope.el.clientWidth * 1.05) + 'px)';
      }
    };


})

;




})(window.ionic);