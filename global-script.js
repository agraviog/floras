// store swiper
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

// nav button function
$('.nav-btn-wrap').on('click', function () {
  $('.nav-wrap').toggleClass('u-color-dark');
});

$('.button').each(function () {
  var $button = $(this);
  var $buttonIcon = $button.find('.button-icon');

  $button.on('mouseenter', function () {
    $buttonIcon.addClass('rotate');
  });

  $button.on('mouseleave', function () {
    $buttonIcon.removeClass('rotate');
  });
});

// card store function
$('.card-store').hover(
  function () {
    $(this).find('.store-name').css('text-decoration', 'underline');
    $(this).find('.store-name').css('text-decoration-thickness', '2px');
    $(this).find('img').css('transform', 'scale(1.2)');
  },
  function () {
    $(this).find('.store-name').css('text-decoration', 'none');
    $(this).find('.store-name').css('text-decoration-thickness', '');
    $(this).find('img').css('transform', 'scale(1)');
  }
);
