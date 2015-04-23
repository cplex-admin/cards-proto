(function(ionic) {

angular
.module('cards', ['ionic'])

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
      .state('standard.wizard', {
          url: "/wizard",
          views: {
              'content': {
                  templateUrl: "views/wizard.html",
                  controller: "WizardCtrl"
              }
          }
      });

    $urlRouterProvider.otherwise("/cards");
    
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})


;

})(window.ionic);