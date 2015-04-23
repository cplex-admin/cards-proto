angular
.module("cards")
.controller('WizardCtrl', function($scope, $state, Wizard, Camera) {

  $scope.wizard = Wizard.data;

  $scope.toCards = function() {
    $state.go("cards.list");
  };

  $scope.takeShot = function(idx) {

    if (navigator.camera === undefined) {
      Wizard.data.pictures[idx] = 'img/pics/' + (10 + idx) +  '-1.jpg';
    } else {
      Camera.getPicture().then(function(imageURI) {
        console.log(imageURI);
        Wizard.data.pictures[idx] = imageURI;
      }, function(err) {
        console.err(err);
      });
    }
  };

})

;