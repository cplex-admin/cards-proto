(function(ionic) {

angular
.module('cards', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
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


.config(function ($stateProvider, $urlRouterProvider, $compileProvider){
    $stateProvider
      .state('cards', {
          abstract: true,
          templateUrl: "views/layouts/cards.html"
      })
      .state('cards.list', {
          url: "/cards",
          views: {
              'content': {
                  templateUrl: "views/cards.html",
                  controller: "CardsCtrl"
              }
          }
      })
      .state('standard', {
          abstract: true,
          templateUrl: "views/layouts/standard.html"
      })
      .state('standard.wizard1', {
          url: "/wizard1",
          views: {
              'content': {
                  templateUrl: "views/wizard1.html",
                  controller: "Wizard1Ctrl"
              }
          }
      })
      .state('standard.wizard2', {
          url: "/wizard2",
          views: {
              'content': {
                  templateUrl: "views/wizard2.html",
                  controller: "Wizard2Ctrl"
              }
          }
      })
      .state('standard.wizard3', {
          url: "/wizard3",
          views: {
              'content': {
                  templateUrl: "views/wizard3.html",
                  controller: "Wizard3Ctrl"
              }
          }
      })

      ;

    $urlRouterProvider.otherwise("/cards");
    
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})


;

})(window.ionic);