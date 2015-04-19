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


.controller('CardsCtrl', function($scope, $ionicScrollDelegate) {
  $scope.cards = [
    {
        avatar: 'img/avatars/270018_55300e9b062e2.jpg'
      , title: 'Ношу темные очки?'
      , images: ['img/pics/1-1.jpg', 'img/pics/1-2.jpg']
      , answers: ['Да, очень часто', 'Вечно забываю о них']
    }
    , {
        avatar: 'img/avatars/270021_5530119e3b0d9.jpg'
      , title: 'Какой писатель мне нравится?'
      , images: ['img/pics/2-1.jpg', 'img/pics/2-2.jpg']
      , answers: ['Гоголь', 'Булгаков']
    }
    , {
        avatar: 'img/avatars/270026_55301847190b2.jpg'
      , title: 'Могу ли я сесть на шпагат?'
      , answers: ['Могу', 'Нет, не могу']
      , images: ['img/pics/3-1.jpg', 'img/pics/3-2.jpg']
    }
    , {
        avatar: 'img/avatars/270030_55301da729be4.jpg'
      , title: 'Как принять решение?'
      , answers: ['Все взвесить', 'Бросить монетку']
      , images: ['img/pics/4-1.jpg', 'img/pics/4-2.jpg']
    }
    , {
        avatar: 'img/avatars/270031_55301ffa0c82e.jpg'
      , title: 'Женственный стиль в одежде или свободный?'
      , answers: ['Это', 'Это']
      , images: ['img/pics/5-1.jpg', 'img/pics/5-2.jpg']
    }
    , {
        avatar: 'img/avatars/270034_553025f8e4e0e.jpg'
      , title: 'Кроссовки или кеды?'
      , answers: ['Кроссовки', 'Кеды']
      , images: ['img/pics/6-1.jpg', 'img/pics/6-2.jpg']
    }
    , {
        avatar: 'img/avatars/270037_55302b4d3ba6c.jpg'
      , title: 'Если немец, то?'
      , answers: ['BMW', 'Mercedes']
      , images: ['img/pics/7-1.jpg', 'img/pics/7-2.jpg']
    }
    , {
        avatar: 'img/avatars/270040_55302da943548.jpg'
      , title: 'To drink?'
      , answers: ['Wine', 'Coke']
      , images: ['img/pics/8-1.jpg', 'img/pics/8-2.jpg']
    }
    , {
        avatar: 'img/avatars/270077_5530efbf73388.jpg'
      , title: 'Кто создал человека?'
      , answers: ['Природа', 'Бог']
      , images: ['img/pics/9-1.jpg', 'img/pics/9-2.jpg']
    }
    , {
        avatar: 'img/avatars/270080_5530f31935c03.jpg'
      , title: 'Что я предпочту?'
      , answers: ['Баранина', 'Говядина']
      , images: ['img/pics/10-1.jpg', 'img/pics/10-2.jpg']
    }
    , {
        avatar: 'img/avatars/270083_5530f92827611.jpg'
      , title: 'Люблю ли я праздновать день рождения?'
      , answers: ['Уже нет', 'Да!']
      , images: ['img/pics/11-1.jpg', 'img/pics/11-2.jpg']
    }
    , {
        avatar: 'img/avatars/270087_5530fe2fd19bb.jpg'
      , title: 'Я не люблю... ?'
      , answers: ['Спорить', 'Оправдываться']
      , images: ['img/pics/12-1.jpg', 'img/pics/12-2.jpg']
    }
    , {
        avatar: 'img/avatars/270103_5531271b92098.jpg'
      , title: 'Работаю ли я?'
      , answers: ['Да', 'Нет']
      , images: ['img/pics/13-1.jpg', 'img/pics/13-2.jpg']
    }
    , {
        avatar: 'img/avatars/270112_553141a2adda7.jpg'
      , title: 'Чаще пью кофе...'
      , answers: ['Чёрный', 'Со сливками']
      , images: ['img/pics/14-1.jpg', 'img/pics/14-2.jpg']
    }
    , {
        avatar: 'img/avatars/270113_553142070f248.jpg'
      , title: 'Кто более эмоционально переживает проблемы?'
      , answers: ['Тот, кто их решает', 'Тот, кто их создает']
      , images: ['img/pics/15-1.jpg', 'img/pics/15-2.jpg']
    }
  ];

  $scope.bindEvents = function() {
    $scope.animDuration = 200;
    $scope.currIdx = 0;
    $scope.el = angular.element(document.querySelector('.qcards-wrapper'))[0];
    var self = $scope;

    ionic.onGesture('drag', function(e) {
      ionic.requestAnimationFrame(function() { self._doDrag(e) });
    }, $scope.el);

    ionic.onGesture('dragend', function(e) {
      ionic.requestAnimationFrame(function() { self._doDragEnd(e) });
    }, $scope.el);
  };

  $scope._doDrag = function(e) {
    if (!$scope.cardWidth) {
      var card = $($scope.el).find('.qcard')[$scope.currIdx];
      $scope.cardWidth = $scope.cardWidth ? $scope.cardWidth : card.clientWidth;
    }
    $scope.x = (e.gesture.deltaX * 0.7);
    $scope.y = (e.gesture.deltaY * 0.7);

    if ($scope.y < -10) {
      $($scope.el).find('.qcard')[$scope.currIdx].style[ionic.CSS.TRANSFORM] = 'translateY(' + $scope.y  + 'px)';
    }

    if (Math.abs($scope.x) > 10) {
      $scope.el.style[ionic.CSS.TRANSFORM] = 'translateX(' + ($scope.getOffsetX() + $scope.x) + 'px)';
    }
  };

  $scope._doDragEnd = function(e) {
    var card = $($scope.el).find('.qcard')[$scope.currIdx];
    var jqcard = $(card);
    card.style[TRANSITION] = '-webkit-transform ' + $scope.animDuration / 1000 + 's';
    card.style[ionic.CSS.TRANSFORM] = 'translateY(0px)';
    $scope.el.style[TRANSITION] = '-webkit-transform ' + $scope.animDuration / 1000 + 's';
    
    if($scope.y < -50) {
      var correction = ($scope.currIdx > 0) ? $scope.cardWidth * 0.075 : 0;
      var offsetX = $scope.getOffsetX() - correction;
      $scope.el.style[ionic.CSS.TRANSFORM] = 'translateX(' + offsetX + 'px)';
      
      jqcard.animate({
        marginTop: "0",
        marginLeft: "0",
        height: "100%",
        width: "100%",
      }, $scope.animDuration);

      setTimeout(function() {
        jqcard.find('input')[0].focus();
      }, $scope.animDuration);
    } else {
      if (card.style.width == "100%") {
        var marginLeft = ($scope.currIdx == 0) ? "10%" : "2.5%";
        jqcard.animate({
          marginTop: "2.5%",
          marginLeft: marginLeft,
          height: "80%",
          width: "80%",
        }, $scope.animDuration);
        jqcard.find('input')[0].blur();
      }
      
      if ($scope.x > 50 && $scope.currIdx > 0) {
        $scope.currIdx--;
      }
      else if ($scope.x < -50 && $scope.currIdx < $scope.cards.length - 1) {
        $scope.currIdx++;
      }

      $scope.el.style[ionic.CSS.TRANSFORM] = 'translateX(' + $scope.getOffsetX() + 'px)';
    }

    setTimeout(function() {
      card.style[TRANSITION] = 'none';
      $scope.el.style[TRANSITION] = 'none';
    }, $scope.animDuration);
  };

  $scope.getOffsetX = function() {
    return - $scope.cardWidth * 1.075 * $scope.currIdx;
  };

  $scope.expand = function() {
    $scope.y = -101;
    $scope._doDragEnd({});
  };

  $scope.bindEvents();

})

;




})(window.ionic);