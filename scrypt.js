let breakpoint = window.matchMedia('(max-width: 320px)');

let swiper;

function enableSwiper() {
  swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

let breakpointChecker = function () {
  if (breakpoint.matches) {
    enableSwiper();
  } else {
    swiper.destroy();
  }
};

breakpoint.addEventListener('change', breakpointChecker);

breakpointChecker();
