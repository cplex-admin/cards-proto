angular
.module("cards")
.controller('Wizard3Ctrl', function($scope, $state, Wizard, $ionicViewSwitcher, Cards) {

  $scope.wizard = Wizard;

  $scope.back = function() {
    $ionicViewSwitcher.nextDirection('back');
    if (Wizard.data.type == 2)
      $state.go("standard.wizard2");
    else
      $state.go("standard.wizard1");
  };

  $scope.publish = function() {
    Cards.data.push(Wizard.data);
    $ionicViewSwitcher.nextDirection('forward');
    $state.go("cards.list");
  };

})

;