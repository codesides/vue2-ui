'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Button = require('./Button.js');
var Select = require('./Select.js');
var helpers = require('./helpers.js');
var config = require('./ConfigComponent-6e0f59f2.js');
var plugins = require('./plugins-392f5bb8.js');
require('./object-define-property-0c52198e.js');

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Button: Button["default"],
  Select: Select["default"]
});

var HcUi = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    config.setOptions(helpers.merge(config.config, options, true)); // Components

    for (var componentKey in components) {
      Vue.use(components[componentKey]);
    } // Config component


    plugins.registerComponentProgrammatic(Vue, "config", config.ConfigComponent);
  }
};
plugins.use(HcUi);

exports.Button = Button["default"];
exports.Select = Select["default"];
exports.bound = helpers.bound;
exports.createAbsoluteElement = helpers.createAbsoluteElement;
exports.createNewEvent = helpers.createNewEvent;
exports.escapeRegExpChars = helpers.escapeRegExpChars;
exports.getMonthNames = helpers.getMonthNames;
exports.getValueByPath = helpers.getValueByPath;
exports.getWeekdayNames = helpers.getWeekdayNames;
exports.hasFlag = helpers.hasFlag;
exports.indexOf = helpers.indexOf;
exports.isCustomElement = helpers.isCustomElement;
exports.isDefined = helpers.isDefined;
exports.isMobile = helpers.isMobile;
exports.isVueComponent = helpers.isVueComponent;
exports.isWebpSupported = helpers.isWebpSupported;
exports.matchWithGroups = helpers.matchWithGroups;
exports.merge = helpers.merge;
exports.mod = helpers.mod;
exports.multiColumnSort = helpers.multiColumnSort;
exports.removeElement = helpers.removeElement;
exports.sign = helpers.sign;
exports.toCssWidth = helpers.toCssWidth;
exports.ConfigProgrammatic = config.ConfigComponent;
exports["default"] = HcUi;
