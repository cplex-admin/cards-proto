angular
.module('cards')
.factory('Cards', function() {
  var cards = {
    data: [
      {
          avatar: 'img/avatars/270018_55300e9b062e2.jpg'
        , title: 'Ношу темные очки?'
        , images: ['img/pics/1-1.jpg', 'img/pics/1-2.jpg']
        , answers: ['Да, очень часто', 'Вечно забываю о них']
      }
      , {
          avatar: 'img/avatars/270021_5530119e3b0d9.jpg'
        , title: 'Какой писатель мне нравится?'
        , images: ['img/pics/2-1.jpg', 'img/pics/2-2.jpg']
        , answers: ['Гоголь', 'Булгаков']
      }
      , {
          avatar: 'img/avatars/270026_55301847190b2.jpg'
        , title: 'Могу ли я сесть на шпагат?'
        , answers: ['Могу', 'Нет, не могу']
        , images: ['img/pics/3-1.jpg', 'img/pics/3-2.jpg']
      }
      , {
          avatar: 'img/avatars/270030_55301da729be4.jpg'
        , title: 'Как принять решение?'
        , answers: ['Все взвесить', 'Бросить монетку']
        , images: ['img/pics/4-1.jpg', 'img/pics/4-2.jpg']
      }
      , {
          avatar: 'img/avatars/270031_55301ffa0c82e.jpg'
        , title: 'Женственный стиль в одежде или свободный?'
        , answers: ['Это', 'Это']
        , images: ['img/pics/5-1.jpg', 'img/pics/5-2.jpg']
      }
      , {
          avatar: 'img/avatars/270034_553025f8e4e0e.jpg'
        , title: 'Кроссовки или кеды?'
        , answers: ['Кроссовки', 'Кеды']
        , images: ['img/pics/6-1.jpg', 'img/pics/6-2.jpg']
      }
      , {
          avatar: 'img/avatars/270037_55302b4d3ba6c.jpg'
        , title: 'Если немец, то?'
        , answers: ['BMW', 'Mercedes']
        , images: ['img/pics/7-1.jpg', 'img/pics/7-2.jpg']
      }
      , {
          avatar: 'img/avatars/270040_55302da943548.jpg'
        , title: 'To drink?'
        , answers: ['Wine', 'Coke']
        , images: ['img/pics/8-1.jpg', 'img/pics/8-2.jpg']
      }
      , {
          avatar: 'img/avatars/270077_5530efbf73388.jpg'
        , title: 'Кто создал человека?'
        , answers: ['Природа', 'Бог']
        , images: ['img/pics/9-1.jpg', 'img/pics/9-2.jpg']
      }
      , {
          avatar: 'img/avatars/270080_5530f31935c03.jpg'
        , title: 'Что я предпочту?'
        , answers: ['Баранина', 'Говядина']
        , images: ['img/pics/10-1.jpg', 'img/pics/10-2.jpg']
      }
      , {
          avatar: 'img/avatars/270083_5530f92827611.jpg'
        , title: 'Люблю ли я праздновать день рождения?'
        , answers: ['Уже нет', 'Да!']
        , images: ['img/pics/11-1.jpg', 'img/pics/11-2.jpg']
      }
      , {
          avatar: 'img/avatars/270087_5530fe2fd19bb.jpg'
        , title: 'Я не люблю... ?'
        , answers: ['Спорить', 'Оправдываться']
        , images: ['img/pics/12-1.jpg', 'img/pics/12-2.jpg']
      }
      , {
          avatar: 'img/avatars/270103_5531271b92098.jpg'
        , title: 'Работаю ли я?'
        , answers: ['Да', 'Нет']
        , images: ['img/pics/13-1.jpg', 'img/pics/13-2.jpg']
      }
      , {
          avatar: 'img/avatars/270112_553141a2adda7.jpg'
        , title: 'Чаще пью кофе...'
        , answers: ['Чёрный', 'Со сливками']
        , images: ['img/pics/14-1.jpg', 'img/pics/14-2.jpg']
      }
      , {
          avatar: 'img/avatars/270113_553142070f248.jpg'
        , title: 'Кто более эмоционально переживает проблемы?'
        , answers: ['Тот, кто их решает', 'Тот, кто их создает']
        , images: ['img/pics/15-1.jpg', 'img/pics/15-2.jpg']
      }
    ]
  };
  return cards;
})

;