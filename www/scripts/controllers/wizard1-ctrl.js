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

})

;