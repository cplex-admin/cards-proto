angular
.module('cards')
.factory('Cards', function() {
  var cards = {
    data: [
      {
          avatar: 'img/avatars/270018_55300e9b062e2.jpg'
        , question: 'Ношу темные очки?'
        , pictures: ['img/pics/1-1.jpg', 'img/pics/1-2.jpg']
        , answers: ['Да, очень часто', 'Вечно забываю о них']
        , type: 1
      }
      , {
          avatar: 'img/avatars/270021_5530119e3b0d9.jpg'
        , question: 'Какой писатель мне нравится?'
        , pictures: ['img/pics/2-1.jpg', 'img/pics/2-2.jpg']
        , answers: ['Гоголь', 'Булгаков']
        , type: 0
      }
      , {
          avatar: 'img/avatars/270026_55301847190b2.jpg'
        , question: 'Могу ли я сесть на шпагат?'
        , answers: ['Могу', 'Нет, не могу']
        , pictures: ['img/pics/3-1.jpg', 'img/pics/3-2.jpg']
        , type: 2
      }
      , {
          avatar: 'img/avatars/270030_55301da729be4.jpg'
        , question: 'Как принять решение?'
        , answers: ['Все взвесить', 'Бросить монетку']
        , pictures: ['img/pics/4-1.jpg', 'img/pics/4-2.jpg']
        , type: 2
      }
      , {
          avatar: 'img/avatars/270031_55301ffa0c82e.jpg'
        , question: 'Женственный стиль в одежде или свободный?'
        , answers: ['Это', 'Это']
        , pictures: ['img/pics/5-1.jpg', 'img/pics/5-2.jpg']
        , type: 2
      }
      , {
          avatar: 'img/avatars/270034_553025f8e4e0e.jpg'
        , question: 'Кроссовки или кеды?'
        , answers: ['Кроссовки', 'Кеды']
        , pictures: ['img/pics/6-1.jpg', 'img/pics/6-2.jpg']
        , type: 2
      }
      , {
          avatar: 'img/avatars/270037_55302b4d3ba6c.jpg'
        , question: 'Если немец, то?'
        , answers: ['BMW', 'Mercedes']
        , pictures: ['img/pics/7-1.jpg', 'img/pics/7-2.jpg']
        , type: 2
      }
      , {
          avatar: 'img/avatars/270040_55302da943548.jpg'
        , question: 'To drink?'
        , answers: ['Wine', 'Coke']
        , pictures: ['img/pics/8-1.jpg', 'img/pics/8-2.jpg']
        , type: 2
      }
      , {
          avatar: 'img/avatars/270077_5530efbf73388.jpg'
        , question: 'Кто создал человека?'
        , answers: ['Природа', 'Бог']
        , pictures: ['img/pics/9-1.jpg', 'img/pics/9-2.jpg']
        , type: 2
      }
      , {
          avatar: 'img/avatars/270080_5530f31935c03.jpg'
        , question: 'Что я предпочту?'
        , answers: ['Баранина', 'Говядина']
        , pictures: ['img/pics/10-1.jpg', 'img/pics/10-2.jpg']
        , type: 2
      }
      , {
          avatar: 'img/avatars/270083_5530f92827611.jpg'
        , question: 'Люблю ли я праздновать день рождения?'
        , answers: ['Уже нет', 'Да!']
        , pictures: ['img/pics/11-1.jpg', 'img/pics/11-2.jpg']
        , type: 2
      }
      , {
          avatar: 'img/avatars/270087_5530fe2fd19bb.jpg'
        , question: 'Я не люблю... ?'
        , answers: ['Спорить', 'Оправдываться']
        , pictures: ['img/pics/12-1.jpg', 'img/pics/12-2.jpg']
        , type: 2
      }
      , {
          avatar: 'img/avatars/270103_5531271b92098.jpg'
        , question: 'Работаю ли я?'
        , answers: ['Да', 'Нет']
        , pictures: ['img/pics/13-1.jpg', 'img/pics/13-2.jpg']
        , type: 2
      }
      , {
          avatar: 'img/avatars/270112_553141a2adda7.jpg'
        , question: 'Чаще пью кофе...'
        , answers: ['Чёрный', 'Со сливками']
        , pictures: ['img/pics/14-1.jpg', 'img/pics/14-2.jpg']
        , type: 2
      }
      , {
          avatar: 'img/avatars/270113_553142070f248.jpg'
        , question: 'Кто более эмоционально переживает проблемы?'
        , answers: ['Тот, кто их решает', 'Тот, кто их создает']
        , pictures: ['img/pics/15-1.jpg', 'img/pics/15-2.jpg']
        , type: 2
      }
    ]
  };
  return cards;
})

;