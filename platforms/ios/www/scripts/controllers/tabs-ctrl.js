angular
.module("cards")
.controller('TabsCtrl', function($scope, $ionicViewSwitcher, $state) {
  $scope.cards = function() {
    $ionicViewSwitcher.nextDirection('back');
    $state.go("cards.list");
  };
})

;