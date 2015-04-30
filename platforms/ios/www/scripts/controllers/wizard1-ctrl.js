angular
.module("cards")
.controller('Wizard1Ctrl', function($scope, $state, Wizard, Camera, $ionicViewSwitcher) {

  $scope.wizard = Wizard;

  $scope.cards = function() {
    if ($scope.suggestions.length > 0) {
      $scope.suggestions = [];
      return;
    }

    $ionicViewSwitcher.nextDirection('back');
    $state.go("cards.list");
    $scope.switch2();
  };

  $scope.next = function() {
    $ionicViewSwitcher.nextDirection('forward');
    if (Wizard.data.type == 2)
      $state.go("standard.wizard2");
    else
      $state.go("standard.wizard3");
  };

  $scope.takeShot = function(idx) {
    if (navigator.camera === undefined) {
      Wizard.data.pictures[idx] = 'img/pics/' + (10 + idx) +  '-1.jpg';
    } else {
      Camera.getPicture().then(function(imageURI) {
        Wizard.data.pictures[idx] = imageURI;
      }, function(err) {
        console.err(err);
      });
    }
  };

  $scope.isFilled = function() {
    return  Wizard.data.question
            &&
            (
              (
                Wizard.data.pictures.length == 2
                && Wizard.data.pictures[0]
                && Wizard.data.pictures[1]
                && Wizard.data.type == 2
              )
              ||
              (
                Wizard.data.pictures[0]
                && (Wizard.data.type == 0 || Wizard.data.type == 1)
              )
            );
  };

  $scope.toggleType = function(step) {
    if ((Wizard.data.type == 0 && step == -1) || (Wizard.data.type == 2 && step == 1))
      return;

    Wizard.data.type += step;
  };

  $scope.field = undefined;
  $scope.suggScroll = undefined;
  $scope.suggest = function() {
    if (!Wizard.data.question) {
      $scope.suggestions = [];
      return;
    }

    if (!$scope.field) {
      $scope.field = $('input.question').get(0);
      $scope.suggScroll = $('ion-scroll.qautocomplete').get(0);
    }

    var topOffset = $scope.field.clientHeight;
    $scope.suggScroll.style.top = topOffset + 'px';
    $scope.suggScroll.style.height = (window.innerHeight - topOffset) + 'px';

    $scope.suggestions = [];
    for (var i = 0; i < $scope.fullSuggestions.length; i++) {
      var s = $scope.fullSuggestions[i];
      if (s.toLowerCase().indexOf(Wizard.data.question.toLowerCase()) == 0) {
        $scope.suggestions.push(s);
      }
    }
  };

  $scope.selectQ = function(sug){
    Wizard.data.question = sug;
    $scope.suggestions = [];
  };

  $scope.suggestions = [];
  $scope.fullSuggestions = [
    'Я сладкоежка?',
    'Что я люблю с утра?',
    'Умею ли я хранить тайны?',
    'Откуда я беру информацию?',
    'Боюсь ли я щекотки ?',
    'Что лучше?',
    'Какой у меня характер?',
    'Я больше люблю рулить или ходить?',
    'Мое жизненное кредо?',
    'Кто виноват, что девушки капризные?',
    'Предпочитаю ? ',
    'На какой руке часы?',
    'Как я поступаю чаще?',
    'Я вспыльчивый человек ?',
    'Чего мне всегда не хватает?',
    'Кто для меня важнее?',
    'Я считаю, что женщина за рулем это...?',
    'Пою ли я в душе?',
    'Что в себе ценю больше?',
    'Чего во мне больше?',
    'На чем мне хотелось бы прокатиться? ',
    'Я считаю, что зеркало души - это',
    'Кто должен проявлять инициативу при знакомстве?',
    'У меня дома чаще..?',
    'Купаюсь ли я на Крещение?',
    'Я ленивый человек?',
    'Что приятнее шелестит?',
    'Люблю ли я свою работу?',
    'Как я борюсь со стрессом?',
    'Сколько друзей мне нужно? ',
    'На что уходит моя зарплата?',
    'Я путешествую?',
    'Я считаю, что романтичнее поцелуй...',
    'Умею ли я играть на гитаре?',
    'Спанч Боб меня веселит или раздражает?',
    'Как я думаю, кто сильнее?',
    'Как я люблю слушать музыку? ',
    'Как я обычно ем арбуз?',
    'На чем мне хотелось бы прокатиться?',
    'Где я ищу знания?',
    'О чем я мечтаю?',
    'Я умею собирать кубик Рубика?',
    'Что мне по душе - тусовки или любовь?',
    'Предпочитаю делать, как подсказывает..?',
    'Что мне не нравится в зиме?'
  ];

  $scope.table = $('.two-questions .image-holder').get(0);
  $scope.bindEvents = function() {
    ionic.onGesture('drag', function(e) {
      ionic.requestAnimationFrame(function() { $scope._doDrag(e) });
    }, $scope.table);

    ionic.onGesture('dragend', function(e) {
      ionic.requestAnimationFrame(function() { $scope._doDragEnd(e) });
    }, $scope.table);
  };

  $scope.first = $('#first').get(0);
  $scope.firstInput = $scope.first.getElementsByTagName('input')[0];
  $scope.second = $('#second').get(0);
  $scope._doDrag = function(e) {
    $scope.x = (e.gesture.deltaX);

    if (Wizard.data.type == 1) {
      if ($scope.x < 0)
        $scope.firstInput.style.backgroundImage = 'url(img/or-left.png)';
      else {
        $scope.firstInput.style.width = $scope.firstInput.clientWidth - $scope.x + 'px';
      }
    }

    if (Wizard.data.type == 0)
      if ($scope.x > 0)
        return;
      else {
        $scope.firstInput.style.display = 'inline-block';
        $scope.firstInput.style.width = -$scope.x + 'px';
        return;
      }


    if (Wizard.data.type == 2 && $scope.x < 0)
      return;

    var fw = Math.max(Math.min($scope.first.clientWidth + $scope.x, $scope.table.clientWidth), $scope.table.clientWidth / 2);
    var sw = Math.min($scope.second.clientWidth - $scope.x, $scope.table.clientWidth / 2);

    if (fw > 4) {
      $scope.first.style.width = fw + 'px';
      $scope.first.style.display = 'inline-block';
    }

    if (sw > 4) {
      $scope.second.style.width = sw + 'px';
      $scope.second.style.display = 'inline-block';
    } else {
      $scope.second.style.display = 'none';
    }
  };

  $scope._doDragEnd = function(e) {
    if (Wizard.data.type == 0 && $scope.x < -10) {
      $scope.switch1();
      return;
    }
    if (Wizard.data.type == 1 && $scope.x > 10) {
      $scope.switch0();
      return;
    }
    if (Wizard.data.type == 1 && $scope.x < -10) {
      $scope.switch2();
      return;
    }
    if (Wizard.data.type == 2 && $scope.x > 10) {
      $scope.switch1();
      return;
    }
  };

  $scope.switch0 = function() {
    $scope.firstInput.style.display = 'none';
    $scope.first.style.width = '100%';
    $scope.second.style.display = 'none';
    Wizard.data.type = 0;
  };

  $scope.switch1 = function() {
    $scope.firstInput.style.backgroundImage = 'none';
    $scope.firstInput.style.display = 'inline-block';
    $scope.firstInput.style.width = '';
    $scope.first.style.width = '100%';
    $scope.second.style.display = 'none';
    Wizard.data.type = 1;
  };

  $scope.switch2 = function() {
    $scope.firstInput.style.backgroundImage = 'url(img/or-left.png)';
    $scope.firstInput.style.display = 'inline-block';
    $scope.firstInput.style.width = '';
    $scope.first.style.width = '50%';
    $scope.second.style.width = '50%';
    $scope.second.style.display = 'inline-block';
    Wizard.data.type = 2;
  };

  $scope.bindEvents();

})

;