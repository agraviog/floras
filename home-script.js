// home header link function
$('.home-header-link').hover(
  function () {
    $(this).find('.hero-text').css('text-decoration', 'underline');
    $(this).find('.hero-text').css('text-decoration-thickness', '2px');
    $(this).find('.button-arrow').removeClass('stroke');
  },
  function () {
    $(this).find('.hero-text').css('text-decoration', 'none');
    $(this).find('.hero-text').css('text-decoration-thickness', '');
    $(this).find('.button-arrow').addClass('stroke');
  }
);

// Menu swiper
const swiperMenu = new Swiper('.swiper.is-menu', {
  slidesPerView: 3.2,
  slidesPerGroup: 1,
  spaceBetween: 32,
  speed: 800,
  grabCursor: true,
  allowTouchMove: true,
  navigation: {
    nextEl: '.swiper-arrow-next.is-menu',
    prevEl: '.swiper-arrow-prev.is-menu',
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
      slidesPerView: 3.25,
      slidesPerGroup: 1,
      spaceBetween: 24,
    },
  },
});

// card-menu function
$('.card-menu').hover(
  function () {
    $(this).find('img').css('transform', 'scale(1.1)');
  },
  function () {
    $(this).find('img').css('transform', 'scale(1)');
  }
);

// card-blog function
$('.card-blog').hover(
  function () {
    $(this).find('.card-arrow').removeClass('stroke').addClass('dark');
    $(this).find('.read-more').css('text-decoration', 'underline');
    $(this).find('img').css('transform', 'scale(1.1)');
  },
  function () {
    $(this).find('.card-arrow').removeClass('dark').addClass('stroke');
    $(this).find('.read-more').css('text-decoration', 'none');
    $(this).find('img').css('transform', 'scale(1)');
  }
);

// card-career function
$('#card-career').hover(
  function () {
    $(this).find('.card-arrow').removeClass('light').addClass('dark');
    $(this).find('.work-with-us').css('text-decoration', 'underline');
  },
  function () {
    $(this).find('.card-arrow').removeClass('dark').addClass('light');
    $(this).find('.work-with-us').css('text-decoration', 'none');
  }
);

// card-food function
$('#card-food').hover(
  function () {
    $(this)
      .find('.card-arrow')
      .removeClass('accent-dark')
      .addClass('accent-light');
    $(this).find('.learn-more').css('text-decoration', 'underline');
  },
  function () {
    $(this)
      .find('.card-arrow')
      .removeClass('accent-light')
      .addClass('accent-dark');
    $(this).find('.learn-more').css('text-decoration', 'none');
  }
);
