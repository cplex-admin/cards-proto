angular
.module("cards")
.controller('TabsCtrl', function($scope, $ionicViewSwitcher, $state) {
  $scope.cards = function() {
    $ionicViewSwitcher.nextDirection('none');
    $state.go("cards.list");
  };
})

;