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



angular
.module("cards")
.controller('CardsCtrl', function($scope, $ionicScrollDelegate, $state, Cards, Wizard, Camera, $ionicViewSwitcher, Profile) {

  $scope.profile = Profile;

  $scope.cards = Cards.data;

  $scope.contacts = [];

  $scope.comment = { text: '', sent: false };
  
  $scope.animDuration = 200;
  $scope.currIdx = 0;
  $scope.card = undefined;
  $scope.cardWidth = undefined;
  $scope.wrapper = $('.qcards-wrapper')[0];
  $scope.commentBar = $('.bar-footer.comment')[0];
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
    
    $scope.wrapper.classList.add('full-screen');
    $scope.card.animate({
      marginTop: "0",
      marginLeft: "0",
      height: "100%",
      width: "100%",
    }, $scope.animDuration);

    setTimeout(function() {
      $scope.commentBar.style.visibility = 'visible';
      $scope.commentBar.getElementsByTagName('input')[0].focus();
      //$scope.card.get(0).classList.add('fixed');


      $('.bar-header.cards-header').show();
      $scope.card.find('.title').hide();
      // $('.chat').hide();
      // $('.chat-panel').show();
      $('.chat-panel').css('height', (window.innerHeight - 44) + 'px');
      $('.chat-panel .spacer').css('height', (window.innerHeight) + 'px');
      var viewScroll = $ionicScrollDelegate.$getByHandle('chat-panel');
      viewScroll.scrollBottom(true);
    }, $scope.animDuration + 100);
  };

  $scope.collapse = function() {
    if ($scope.state == 0)
      return;

    $scope.state = 0;
    $scope.cards[$scope.currIdx].comments = [];

    $scope.wrapper.style[TRANSITION] = '-webkit-transform ' + $scope.animDuration / 1000 + 's';
    $scope.wrapper.style[ionic.CSS.TRANSFORM] = 'translateX(' + $scope.getOffsetX() + 'px)';


    $scope.card.find('.title').show();
    $('.bar-header.cards-header').hide();
      var viewScroll = $ionicScrollDelegate.$getByHandle('chat-panel');
      viewScroll.scrollTop(false);
      $('.chat-panel .spacer').css('height', '0');
    $('.chat-panel').css('height', '312px');

    $scope.commentBar.style.visibility = 'hidden';
    $scope.wrapper.classList.remove('full-screen');
    $scope.card.get(0).classList.remove('fixed');
    $scope.card.get(0).classList.remove('chat-header');
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
    $scope.card.get(0).classList.add('chat-header');
    if (!$scope.cards[$scope.currIdx].comments) {
      $scope.cards[$scope.currIdx].comments = [];
    }
    $scope.cards[$scope.currIdx].comments.push($scope.cards[$scope.currIdx].newComment);
    $scope.cards[$scope.currIdx].newComment = '';
      var viewScroll = $ionicScrollDelegate.$getByHandle('chat-panel');
      viewScroll.scrollBottom(true);
    // setTimeout(function() {
    //   $scope.commentBar.getElementsByTagName('input')[0].focus();
    // }, 100);
  };

  $scope.takePicture = function() {
    if (navigator.camera === undefined) {
      $scope.goWizard('img/pics/14-1.jpg');
    } else {
      Camera.getPicture().then(function(imageURI) {
        console.log(imageURI);
        $scope.goWizard(imageURI);
      }, function(err) {
        console.err(err);
      });
    }
  };

  $scope.goWizard = function(uri) {
    Wizard.reset();
    Wizard.data.pictures[0] = uri;
    $ionicViewSwitcher.nextDirection('forward');
    $state.go("standard.wizard1");
  };

  $scope.bindEvents();

})

;


})(window.ionic);