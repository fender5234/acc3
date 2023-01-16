const scrolledToContent = (scrolledElement) => scrolledElement.scrollTop > window.innerHeight / 10;

function initLazy(callback, scrolledElement, scrollHandler) {
  if (scrollHandler) {
    document.removeEventListener('scroll', scrollHandler);
  }

  scrolledElement.querySelectorAll('[data-lazy-style]').forEach((lazyStyledElement) => {
    lazyStyledElement.setAttribute('style', lazyStyledElement.dataset.lazyStyle);
    lazyStyledElement.removeAttribute('data-lazy-style');
  });

  callback();
}

export default (callback, scrolledElement = document.documentElement) => {
  // Загрузка скриптов второго и последующих экранов
  if (scrolledToContent(scrolledElement)) {
    initLazy(callback, scrolledElement);
  } else {
    const scrollHandler = () => {
      if (!scrolledToContent(scrolledElement)) {
        return;
      }

      initLazy(callback, scrolledElement, scrollHandler);
    };

    document.addEventListener('scroll', scrollHandler);
  }
};
