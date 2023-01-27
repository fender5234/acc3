import {activateElement, deactivateElement} from '../utils/active.js';

export default (tabsElement) => {
  tabsElement.addEventListener('click', (event) => {
    const {openTab} = event.target.dataset;

    if (openTab) {
      const inactiveSelector = `[data-open-tab]:not([data-open-tab="${openTab}"]), [data-tab]:not([data-tab="${openTab}"])`;
      tabsElement.querySelectorAll(inactiveSelector).forEach(deactivateElement);

      [event.target, tabsElement.querySelector(`[data-tab="${openTab}"]`)].forEach(activateElement);
    }
  });

  tabsElement.classList.remove('no-js');
};
