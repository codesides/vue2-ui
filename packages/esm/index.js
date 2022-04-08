import Plugin from './Button.js';
export { default as Button } from './Button.js';
import Plugin$1 from './Select.js';
export { default as Select } from './Select.js';
import { merge } from './helpers.js';
export { bound, createAbsoluteElement, createNewEvent, escapeRegExpChars, getMonthNames, getValueByPath, getWeekdayNames, hasFlag, indexOf, isCustomElement, isDefined, isMobile, isVueComponent, isWebpSupported, matchWithGroups, merge, mod, multiColumnSort, removeElement, sign, toCssWidth } from './helpers.js';
import { s as setOptions, c as config, C as ConfigComponent } from './ConfigComponent-ac6b637c.js';
export { C as ConfigProgrammatic } from './ConfigComponent-ac6b637c.js';
import { u as use, r as registerComponentProgrammatic } from './plugins-0549e54e.js';
import './object-define-property-dd3798ba.js';

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Button: Plugin,
  Select: Plugin$1
});

var HcUi = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    setOptions(merge(config, options, true)); // Components

    for (var componentKey in components) {
      Vue.use(components[componentKey]);
    } // Config component


    registerComponentProgrammatic(Vue, "config", ConfigComponent);
  }
};
use(HcUi);

export { HcUi as default };
