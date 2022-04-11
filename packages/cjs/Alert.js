'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var arrayIteration = require('./array-iteration-42555ce0.js');
var functionName = require('./function-name-75375617.js');
var plugins = require('./plugins-a86ae864.js');

var arraySlice = functionName.functionUncurryThis([].slice);

var f = functionName.wellKnownSymbol;

var wellKnownSymbolWrapped = {
	f: f
};

var path = functionName.global_1;

var defineProperty$2 = functionName.objectDefineProperty.f;

var defineWellKnownSymbol = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!functionName.hasOwnProperty_1(Symbol, NAME)) defineProperty$2(Symbol, NAME, {
    value: wellKnownSymbolWrapped.f(NAME)
  });
};

var defineProperty$1 = functionName.objectDefineProperty.f;



var TO_STRING_TAG = functionName.wellKnownSymbol('toStringTag');

var setToStringTag = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !functionName.hasOwnProperty_1(target, TO_STRING_TAG)) {
    defineProperty$1(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};

var $forEach = arrayIteration.arrayIteration.forEach;

var HIDDEN = arrayIteration.sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = functionName.wellKnownSymbol('toPrimitive');

var setInternalState = arrayIteration.internalState.set;
var getInternalState = arrayIteration.internalState.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = functionName.global_1.Symbol;
var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE];
var TypeError = functionName.global_1.TypeError;
var QObject = functionName.global_1.QObject;
var $stringify = functionName.getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = arrayIteration.objectGetOwnPropertyDescriptor.f;
var nativeDefineProperty = functionName.objectDefineProperty.f;
var nativeGetOwnPropertyNames = arrayIteration.objectGetOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = arrayIteration.objectPropertyIsEnumerable.f;
var push = functionName.functionUncurryThis([].push);

var AllSymbols = functionName.shared('symbols');
var ObjectPrototypeSymbols = functionName.shared('op-symbols');
var StringToSymbolRegistry = functionName.shared('string-to-symbol-registry');
var SymbolToStringRegistry = functionName.shared('symbol-to-string-registry');
var WellKnownSymbolsStore = functionName.shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = functionName.descriptors && functionName.fails(function () {
  return arrayIteration.objectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = arrayIteration.objectCreate(SymbolPrototype$1);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!functionName.descriptors) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  functionName.anObject(O);
  var key = functionName.toPropertyKey(P);
  functionName.anObject(Attributes);
  if (functionName.hasOwnProperty_1(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!functionName.hasOwnProperty_1(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, arrayIteration.createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (functionName.hasOwnProperty_1(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = arrayIteration.objectCreate(Attributes, { enumerable: arrayIteration.createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  functionName.anObject(O);
  var properties = arrayIteration.toIndexedObject(Properties);
  var keys = arrayIteration.objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!functionName.descriptors || functionName.functionCall($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? arrayIteration.objectCreate(O) : $defineProperties(arrayIteration.objectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = functionName.toPropertyKey(V);
  var enumerable = functionName.functionCall(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && functionName.hasOwnProperty_1(AllSymbols, P) && !functionName.hasOwnProperty_1(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !functionName.hasOwnProperty_1(this, P) || !functionName.hasOwnProperty_1(AllSymbols, P) || functionName.hasOwnProperty_1(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = arrayIteration.toIndexedObject(O);
  var key = functionName.toPropertyKey(P);
  if (it === ObjectPrototype && functionName.hasOwnProperty_1(AllSymbols, key) && !functionName.hasOwnProperty_1(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && functionName.hasOwnProperty_1(AllSymbols, key) && !(functionName.hasOwnProperty_1(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(arrayIteration.toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!functionName.hasOwnProperty_1(AllSymbols, key) && !functionName.hasOwnProperty_1(arrayIteration.hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : arrayIteration.toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (functionName.hasOwnProperty_1(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || functionName.hasOwnProperty_1(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!functionName.nativeSymbol) {
  $Symbol = function Symbol() {
    if (functionName.objectIsPrototypeOf(SymbolPrototype$1, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : arrayIteration.toString_1(arguments[0]);
    var tag = functionName.uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) functionName.functionCall(setter, ObjectPrototypeSymbols, value);
      if (functionName.hasOwnProperty_1(this, HIDDEN) && functionName.hasOwnProperty_1(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, arrayIteration.createPropertyDescriptor(1, value));
    };
    if (functionName.descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype$1 = $Symbol[PROTOTYPE];

  arrayIteration.redefine(SymbolPrototype$1, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  arrayIteration.redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(functionName.uid(description), description);
  });

  arrayIteration.objectPropertyIsEnumerable.f = $propertyIsEnumerable;
  functionName.objectDefineProperty.f = $defineProperty;
  arrayIteration.objectDefineProperties.f = $defineProperties;
  arrayIteration.objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
  arrayIteration.objectGetOwnPropertyNames.f = arrayIteration.objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  arrayIteration.objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

  wellKnownSymbolWrapped.f = function (name) {
    return wrap(functionName.wellKnownSymbol(name), name);
  };

  if (functionName.descriptors) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype$1, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    {
      arrayIteration.redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

arrayIteration._export({ global: true, wrap: true, forced: !functionName.nativeSymbol, sham: !functionName.nativeSymbol }, {
  Symbol: $Symbol
});

$forEach(arrayIteration.objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

arrayIteration._export({ target: SYMBOL, stat: true, forced: !functionName.nativeSymbol }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = arrayIteration.toString_1(key);
    if (functionName.hasOwnProperty_1(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!functionName.isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (functionName.hasOwnProperty_1(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

arrayIteration._export({ target: 'Object', stat: true, forced: !functionName.nativeSymbol, sham: !functionName.descriptors }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

arrayIteration._export({ target: 'Object', stat: true, forced: !functionName.nativeSymbol }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
arrayIteration._export({ target: 'Object', stat: true, forced: functionName.fails(function () { arrayIteration.objectGetOwnPropertySymbols.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return arrayIteration.objectGetOwnPropertySymbols.f(functionName.toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !functionName.nativeSymbol || functionName.fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  arrayIteration._export({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var $replacer = replacer;
      if (!functionName.isObject(replacer) && it === undefined || functionName.isSymbol(it)) return; // IE8 returns string on undefined
      if (!arrayIteration.isArray(replacer)) replacer = function (key, value) {
        if (functionName.isCallable($replacer)) value = functionName.functionCall($replacer, this, key, value);
        if (!functionName.isSymbol(value)) return value;
      };
      args[1] = replacer;
      return arrayIteration.functionApply($stringify, null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!SymbolPrototype$1[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype$1.valueOf;
  // eslint-disable-next-line no-unused-vars -- required for .length
  arrayIteration.redefine(SymbolPrototype$1, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return functionName.functionCall(valueOf, this);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

arrayIteration.hiddenKeys[HIDDEN] = true;

var defineProperty = functionName.objectDefineProperty.f;


var NativeSymbol = functionName.global_1.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (functionName.descriptors && functionName.isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : arrayIteration.toString_1(arguments[0]);
    var result = functionName.objectIsPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  arrayIteration.copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var symbolToString = functionName.functionUncurryThis(SymbolPrototype.toString);
  var symbolValueOf = functionName.functionUncurryThis(SymbolPrototype.valueOf);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = functionName.functionUncurryThis(''.replace);
  var stringSlice = functionName.functionUncurryThis(''.slice);

  defineProperty(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = symbolValueOf(this);
      var string = symbolToString(symbol);
      if (functionName.hasOwnProperty_1(EmptyStringDescriptionStore, symbol)) return '';
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  arrayIteration._export({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var TYPE_CLASSES_MAP = {
  success: "hc-icon-success",
  warning: "hc-icon-warning",
  error: "hc-icon-error"
};
var script = {
  name: "HcAlert",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ""
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: "light",
      validator: function validator(value) {
        return ["light", "dark"].indexOf(value) !== -1;
      }
    }
  },
  data: function data() {
    return {
      visible: true
    };
  },
  methods: {
    close: function close() {
      this.visible = false;
      this.$emit("close");
    }
  },
  computed: {
    typeClass: function typeClass() {
      return "hc-alert--".concat(this.type);
    },
    iconClass: function iconClass() {
      return TYPE_CLASSES_MAP[this.type] || "hc-icon-info";
    },
    isBigIcon: function isBigIcon() {
      return this.description || this.$slots.default ? "is-big" : "";
    },
    isBoldTitle: function isBoldTitle() {
      return this.description || this.$slots.default ? "is-bold" : "";
    }
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"hc-alert-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"hc-alert",class:[_vm.typeClass, _vm.center ? 'is-center' : '', 'is-' + _vm.effect],attrs:{"role":"alert"}},[(_vm.showIcon)?_c('i',{staticClass:"hc-alert__icon",class:[_vm.iconClass, _vm.isBigIcon]}):_vm._e(),_c('div',{staticClass:"hc-alert__content"},[(_vm.title || _vm.$slots.title)?_c('span',{staticClass:"hc-alert__title",class:[_vm.isBoldTitle]},[_vm._t("title",function(){return [_vm._v(_vm._s(_vm.title))]})],2):_vm._e(),(_vm.$slots.default && !_vm.description)?_c('p',{staticClass:"hc-alert__description"},[_vm._t("default")],2):_vm._e(),(_vm.description && !_vm.$slots.default)?_c('p',{staticClass:"hc-alert__description"},[_vm._v(" "+_vm._s(_vm.description)+" ")]):_vm._e(),_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.closable),expression:"closable"}],staticClass:"hc-alert__closebtn",class:{
          'is-customed': _vm.closeText !== '',
          'hc-icon-close': _vm.closeText === '',
        },on:{"click":function($event){return _vm.close()}}},[_vm._v(_vm._s(_vm.closeText))])])])])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/plugins.normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var Plugin = {
  install: function install(Vue) {
    plugins.registerComponent(Vue, __vue_component__);
  }
};
plugins.use(Plugin);

exports.HcAlert = __vue_component__;
exports["default"] = Plugin;