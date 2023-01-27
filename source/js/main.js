import initForm from './modules/form.js';
import initLazy from './modules/init-lazy.js';
import initSlider from './modules/slider.js';
import initTabs from './modules/tabs.js';
import initVideo from './modules/video.js';

initLazy(() => {
  // сюда следует добавить скрипты, не участвующие в работе первого экрана
  document.querySelectorAll('[data-form]').forEach(initForm);
  document.querySelectorAll('[data-slider]').forEach(initSlider);
  document.querySelectorAll('[data-tabs]').forEach(initTabs);
  document.querySelectorAll('[data-video]').forEach(initVideo);
});

// привязывайте js не на классы, а на дата-атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.
