
//бургер

const openBurger = document.querySelector('.burger-btn');
const navigationMenu = document.querySelector('.navigation');
const navigationLink = document.querySelectorAll('.navigation__link');
const overlay = document.querySelector('.overlay');

openBurger.addEventListener('click', function() {
    navigationMenu.classList.toggle('mobile');
    openBurger.classList.toggle('transformation');
    openBurger.classList.toggle('open');
    overlay.classList.toggle('shadow');
})

navigationLink.forEach(link => {
  link.addEventListener('click', () => {
    navigationMenu.classList.remove('mobile');
    openBurger.classList.remove('transformation');
    overlay.classList.remove('shadow');
  })
})

// табы
const tabsBtn = document.querySelectorAll('.tabs__btn');
// const tabsBtnActive = document.querySelectorAll('.tabs__btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const tabs = document.querySelector('.tabs');

tabsBtn.forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.remove('active');
    item.classList.add('active');

    let activeBtn = item;
    if(tabsBtn[0] == activeBtn) {
       portfolioImages.forEach((img, index) => img.src = `./src/img/portfolio/winter/${index + 1}.jpg`);
    } else if(tabsBtn[1] == activeBtn) {
      portfolioImages.forEach((img, index) => img.src = `./src/img/portfolio/spring/${index + 1}.jpg`);
    } else if(tabsBtn[2] == activeBtn) {
      portfolioImages.forEach((img, index) => img.src = `./src/img/portfolio/summer/${index + 1}.jpg`);
    } else {
      portfolioImages.forEach((img, index) => img.src = `./src/img/portfolio/autumn/${index + 1}.jpg`);
    }

    tabsBtn.forEach(function(item) {
      item.classList.remove('active');
    });

    item.classList.add('active');

  })

});


//светлая тема
const themesBtn = document.querySelector('.themes-btn');
const navigation = document.querySelector('.navigation');
const burgerLine = document.querySelector('.burger-line:nth-child(1)');
const burgerLines = document.querySelector('.burger-line:nth-child(3)');
const skills = document.querySelector('.skills');
const portfolio = document.querySelector('.portfolio');
const video = document.querySelector('.video');
const price = document.querySelector('.price');

themesBtn.addEventListener('click', function() {
  themesBtn.classList.toggle('light-theme');
  navigation.classList.toggle('light-theme');
  burgerLine.classList.toggle('light-theme');
  burgerLines.classList.toggle('light-theme');
  skills.classList.toggle('light-theme');
  portfolio.classList.toggle('light-theme');
  video.classList.toggle('light-theme');
  price.classList.toggle('light-theme');
})

//ripple эффект для кнопок
const btn = document.querySelectorAll('.ripple');

btn.forEach(function(item) {
  item.onmousemove = function(event) {
    const y = event.pageY - item.offsetTop;
    const x = event.pageX - item.offsetLeft;
    
    item.style.setProperty('--x', x + 'px');
    item.style.setProperty('--y', y + 'px');
  };
});


//перевод на русский язык

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-title-1': 'Standard',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-title-1': 'Premium',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-title-1': 'Gold',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
    'email': 'E-mail',
    'phone': 'Phone',
    'message': 'Message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-title-1': 'Стандартный',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-title-1': 'Премиум',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-title-1': 'Золотой',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
    'email': 'Почта',
    'phone': 'Телефон',
    'message': 'Сообщение'
  }
}


let language = document.querySelectorAll('[data-i18]');
let lang = document.querySelectorAll('.btn-lang');
let langRu = 'ru';
let langEn = 'en';

lang.forEach(function(item) {
  item.addEventListener('click', function() {

    if(item.textContent == langRu) {

      language.forEach(function(element) {
        element.textContent = i18Obj['ru'][element.dataset.i18];
    });

    } else if(item.textContent == langEn) {

        language.forEach(function(element) {
          element.textContent = i18Obj['en'][element.dataset.i18];
    });

    };
  
  }); 

});

//активная кнопка выбранного языка
let langBtnEn = document.querySelector('.lang-en');
let langBtnRu = document.querySelector('.lang-ru');

  lang.forEach(function(item) {
  item.addEventListener('click', function() {

    if(item == langBtnEn) {
      langBtnRu.classList.remove('active');
      langBtnEn.classList.add('active');
    } else if(item == langBtnRu) {
      langBtnEn.classList.remove('active');
      langBtnRu.classList.add('active');
    }
  });
});
