var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// lib/math.cjs
var require_math = __commonJS({
  "lib/math.cjs"(exports2, module2) {
    var sum2 = (a, b) => a + b;
    var div = (a, b) => a / b;
    var mul = (a, b) => a * b;
    var sub = (a, b) => a - b;
    module2.exports = {
      sum: sum2,
      div,
      mul,
      sub
    };
  }
});

// cjs-to-cjs.cjs
var { sum } = require_math();
console.log(sum(1, 2));
