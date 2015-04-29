angular
.module("cards")
.controller('Wizard1Ctrl', function($scope, $state, Wizard, Camera, $ionicViewSwitcher) {

  $scope.wizard = Wizard;

  $scope.cards = function() {
    $ionicViewSwitcher.nextDirection('back');
    $state.go("cards.list");
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
    return  (
              Wizard.data.pictures.length == 2
              && Wizard.data.pictures[0]
              && Wizard.data.pictures[1]
              && Wizard.data.type == 2
            )
            ||
            (
              Wizard.data.pictures[0]
              && (Wizard.data.type == 0 || Wizard.data.type == 1)
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
      if (s.indexOf(Wizard.data.question) == 0) {
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

})

;