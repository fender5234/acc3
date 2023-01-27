export default (sliderElement) => {
  const {loop, multiple} = sliderElement.dataset;

  const sliderOptions = {
    grabCursor: true,
    loop: typeof loop !== 'undefined',
    navigation: {
      nextEl: sliderElement.querySelector('[data-next]'),
      prevEl: sliderElement.querySelector('[data-prev]'),
    },
    slideClass: 'slider__item',
    wrapperClass: 'slider__list',
  };

  if (typeof multiple !== 'undefined') {
    sliderOptions.breakpoints = {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
        grabCursor: false,
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1300: {
        allowTouchMove: false,
        grabCursor: false,
        slidesPerView: 4,
        spaceBetween: 40,
      },
    };
  }

  sliderElement.classList.remove('no-js');

  return new Swiper(sliderElement.querySelector('[data-slider-body]'), sliderOptions);
};
