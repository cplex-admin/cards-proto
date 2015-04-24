angular
.module('cards')
.factory('Wizard', function() {
  var wizard = {
    data: {
      type: 2,
      question: '',
      pictures: [],
      answers: []
    }
  };
  return wizard;
})

;