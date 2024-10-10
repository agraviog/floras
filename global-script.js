const swiperStore = new Swiper('.swiper.is-store', {
  slidesPerView: 3.2,
  slidesPerGroup: 1,
  spaceBetween: 32,
  speed: 800,
  grabCursor: true,
  allowTouchMove: true,
  navigation: {
    nextEl: '.swiper-arrow-next.is-store',
    prevEl: '.swiper-arrow-prev.is-store',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
    480: {
      slidesPerView: 2.2,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3.2,
      slidesPerGroup: 1,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3.2,
      slidesPerGroup: 1,
      spaceBetween: 24,
    },
  },
});
