angular
.module("cards")
.controller('Wizard2Ctrl', function($scope, $state, Wizard, $ionicViewSwitcher) {

  $scope.wizard = Wizard;

  $scope.back = function() {
    $ionicViewSwitcher.nextDirection('back');
    $state.go("standard.wizard1");
  };

  $scope.next = function() {
    $ionicViewSwitcher.nextDirection('forward');
    $state.go("standard.wizard3");
  };

  $scope.isFilled = function() {
    return  Wizard.data.rightAnswer != -1 || true;
  };

})

;