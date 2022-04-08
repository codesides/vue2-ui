import { n as normalizeComponent_1, b as browser, u as use, a as registerComponent } from './plugins-0549e54e.js';
import './object-define-property-dd3798ba.js';

//
//
//
//
//
//
var script = {
  name: "HcSelect",
  data: function data() {
    return {};
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__ = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper"},[_c('p',{staticClass:"wrapper__child"},[_vm._v("Select")])])}];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-69991cae_0", { source: ".wrapper[data-v-69991cae]{width:200px;height:200px;background-color:#ddd}.wrapper__child[data-v-69991cae]{color:#f50}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-69991cae";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    browser,
    undefined,
    undefined
  );

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, __vue_component__);
  }
};
use(Plugin);

export { __vue_component__ as HcSelect, Plugin as default };
