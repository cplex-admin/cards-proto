angular
.module('cards')
.factory('Wizard', function() {
  var wizard = {
    data: {
      question: '',
      pictures: [],
      answers: []
    }
  };
  return wizard;
})

;