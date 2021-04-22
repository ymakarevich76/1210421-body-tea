  new Swiper('.slider', {
    //Стрелки
    navigation: {
      nextEl: '.slider__b-next',
      prevEl: '.slider__b-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoHeigth: true,
    loop: true,
  });
