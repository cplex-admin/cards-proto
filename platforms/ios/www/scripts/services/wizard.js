angular
.module('cards')
.service('Wizard', function(Profile) {
  this.data = {};
  this.reset = function() {
    this.data = {
      avatar: Profile.avatar,
      type: 2,
      question: '',
      pictures: [],
      answers: ['Это', 'Это'],
      rightAnswer: 0
    };
  };
  this.reset();
})

;