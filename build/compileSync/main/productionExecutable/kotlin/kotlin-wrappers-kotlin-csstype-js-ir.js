(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-csstype-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-csstype-js-ir'.");
    }
    root['kotlin-wrappers-kotlin-csstype-js-ir'] = factory(typeof this['kotlin-wrappers-kotlin-csstype-js-ir'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-csstype-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.a;
  var toString = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  //endregion
  function rgb(red, green, blue) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = 'rgb(' + red + ',' + green + ',' + blue + ')';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function get_px(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toString(_this__u8e3s4) + 'px';
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-csstype-js-ir.js.map
