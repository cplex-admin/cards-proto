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

  document.addEventListener("deviceready", onDeviceReady, false);

  function onDeviceReady() {
    cordova.plugins.Keyboard.disableScroll(true);
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

  $scope.contacts = [
      'img/avatars/270018_55300e9b062e2.jpg'
    , 'img/avatars/270030_55301da729be4.jpg'
  ];

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

  $scope.comment = { text: '', sent: false };
  
  $scope.animDuration = 200;
  $scope.currIdx = 0;
  $scope.card = undefined;
  $scope.cardWidth = undefined;
  $scope.wrapper = $('.qcards-wrapper')[0];
  $scope.wWidth = window.innerWidth
                  || document.documentElement.clientWidth
                  || document.body.clientWidth;
  $scope.state = 0;

  $scope.bindEvents = function() {
    ionic.onGesture('drag', function(e) {
      ionic.requestAnimationFrame(function() { $scope._doDrag(e) });
    }, $scope.wrapper);

    ionic.onGesture('dragend', function(e) {
      ionic.requestAnimationFrame(function() { $scope._doDragEnd(e) });
    }, $scope.wrapper);
  };

  $scope._doDrag = function(e) {
    if ($scope.state == 1) {
      console.log('_doDrag: wrong state');
      return;
    }

    if ($scope.card === undefined) {
      $scope.card = $scope.getCard($scope.currIdx);
      $scope.cardWidth = $scope.card.get(0).clientWidth;
    }

    $scope.x = (e.gesture.deltaX * 0.7);
    $scope.y = (e.gesture.deltaY * 0.7);

    $scope.wrapper.style[ionic.CSS.TRANSFORM] = 'translateX(' + ($scope.getOffsetX() + $scope.x) + 'px)';
  };

  $scope._doDragEnd = function(e) {
    if ($scope.state == 1) {
      console.log('_doDragEnd: wrong state');
      return;
    }
    
    $scope.card.get(0).style[TRANSITION] = '-webkit-transform ' + $scope.animDuration / 1000 + 's';
    $scope.card.get(0).style[ionic.CSS.TRANSFORM] = 'translateY(0px)';

    if ($scope.x > 50 && $scope.currIdx > 0) {
      $scope.currIdx--;
    }
    else if ($scope.x < -50 && $scope.currIdx < $scope.cards.length - 1) {
      $scope.currIdx++;
    }

    $scope.wrapper.style[TRANSITION] = '-webkit-transform ' + $scope.animDuration / 1000 + 's';
    $scope.wrapper.style[ionic.CSS.TRANSFORM] = 'translateX(' + $scope.getOffsetX() + 'px)';
    $scope.card = $scope.getCard($scope.currIdx);

    setTimeout(function() {
      $scope.card.get(0).style[TRANSITION] = 'none';
      $scope.wrapper.style[TRANSITION] = 'none';
    }, $scope.animDuration);
  };

  $scope.getOffsetX = function() {
    return - 85 * $scope.cardWidth / 80 * $scope.currIdx;
  };

  $scope.getCard = function(idx) {
    var card = $('.qcard')[$scope.currIdx];
    return $(card);
  };

  $scope.expand = function() {
    if ($scope.state == 1)
      return;

    $scope.state = 1;

    $scope.card = $scope.getCard($scope.currIdx);
    $scope.cardWidth = $scope.card.get(0).clientWidth;
    
    $scope.card.get(0).style[TRANSITION] = '-webkit-transform ' + $scope.animDuration / 1000 + 's';
    $scope.card.get(0).style[ionic.CSS.TRANSFORM] = 'translateY(0px)';

    var offsetX = $scope.getOffsetX()
    if ($scope.currIdx != 0)
      offsetX -= $scope.cardWidth * 0.1;
    $scope.wrapper.style[TRANSITION] = '-webkit-transform ' + $scope.animDuration / 1000 + 's';
    $scope.wrapper.style[ionic.CSS.TRANSFORM] = 'translateX(' + offsetX + 'px)';
    
    $($scope.wrapper).addClass('full-screen');
    $scope.card.addClass('full-screen');
    $scope.card.animate({
      marginTop: "0",
      marginLeft: "0",
      height: "100%",
      width: "100%",
    }, $scope.animDuration);

    setTimeout(function() {
      $('.qcards-wrapper input')[$scope.currIdx].focus();
      setTimeout(function() {
        document.body.scrollTop = 0;
      }, 100);
    }, $scope.animDuration + 100);
  };

  $scope.collapse = function() {
    if ($scope.state == 0)
      return;

    $scope.state = 0;
    $scope.cards[$scope.currIdx].comment = '';

    $scope.wrapper.style[TRANSITION] = '-webkit-transform ' + $scope.animDuration / 1000 + 's';
    $scope.wrapper.style[ionic.CSS.TRANSFORM] = 'translateX(' + $scope.getOffsetX() + 'px)';

    $($scope.wrapper).removeClass('full-screen');
    $scope.card.removeClass('full-screen');
    $scope.card.animate({
      marginTop: "10%",
      marginLeft: ($scope.currIdx == 0) ? "10%" : "2.5%",
      height: "80%",
      width: "80%",
    }, $scope.animDuration);
  };

  $scope.toggleContacts = function(id) {
    var idx = $scope.contacts.indexOf(id);
    if ($scope.contacts.indexOf(id) != -1) {
      $scope.contacts.splice(idx, 1);
    } else {
      $scope.contacts.push(id);
    }
  };

  $scope.sendComment = function() {
    $scope.cards[$scope.currIdx].comment = $scope.cards[$scope.currIdx].newComment;
    $scope.cards[$scope.currIdx].newComment = '';
    setTimeout(function() {
      $('.qcards-wrapper input')[$scope.currIdx].focus();
      setTimeout(function() {
        document.body.scrollTop = 0;
      }, 100);
    }, 100);
  };


  $scope.takePicture = function() {
    navigator.camera.getPicture(function(imageURI) {
      alert(imageURI);
    }, function(err) {
      alert(err);
    }, cameraOptions);
  }

  $scope.bindEvents();

})

;




})(window.ionic);