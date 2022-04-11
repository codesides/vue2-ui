import Plugin from './Alert.js';
export { default as Alert } from './Alert.js';
import Plugin$1 from './Aside.js';
export { default as Aside } from './Aside.js';
import Plugin$2 from './Button.js';
export { default as Button } from './Button.js';
import Plugin$3 from './Select.js';
export { default as Select } from './Select.js';
import Plugin$4 from './Icon.js';
export { default as Icon } from './Icon.js';
import { merge } from './helpers.js';
export { bound, createAbsoluteElement, createNewEvent, escapeRegExpChars, getMonthNames, getValueByPath, getWeekdayNames, hasFlag, indexOf, isCustomElement, isDefined, isMobile, isVueComponent, isWebpSupported, matchWithGroups, merge, mod, multiColumnSort, removeElement, sign, toCssWidth } from './helpers.js';
import { s as setOptions, c as config, C as ConfigComponent } from './ConfigComponent-a4503579.js';
export { C as ConfigProgrammatic } from './ConfigComponent-a4503579.js';
import { u as use, r as registerComponentProgrammatic } from './plugins-9bca0e2f.js';
import './array-iteration-38745f77.js';
import './function-name-f9132a69.js';

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Alert: Plugin,
  Aside: Plugin$1,
  Button: Plugin$2,
  Select: Plugin$3,
  Icon: Plugin$4
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
