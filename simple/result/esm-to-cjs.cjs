var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/math.mjs
var math_exports = {};
__export(math_exports, {
  div: () => div,
  mul: () => mul,
  sub: () => sub,
  sum: () => sum
});
var sum, div, mul, sub;
var init_math = __esm({
  "lib/math.mjs"() {
    sum = (a, b) => a + b;
    div = (a, b) => a / b;
    mul = (a, b) => a * b;
    sub = (a, b) => a - b;
  }
});

// esm-to-cjs.cjs
var { sum: sum2 } = (init_math(), __toCommonJS(math_exports));
console.log(sum2(1, 2));
