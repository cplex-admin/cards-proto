angular
.module('cards')
.service('Wizard', function(Profile) {
  this.data = {};
  this.reset = function() {
    this.data = {
      avatar: Profile.avatar,
      type: 2,
      question: 'Что мне нравится больше?',
      pictures: [],
      answers: ['Это', 'Это'],
      rightAnswer: -1
    };
  };
  this.reset();
})

;