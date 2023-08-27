var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// module-export.cjs
var require_module_export = __commonJS({
  "module-export.cjs"(exports, module) {
    var useEffect2 = () => {
      console.log("useEffect");
    };
    var useState2 = () => {
      console.log("useState");
    };
    module.exports = {
      useEffect: useEffect2,
      useState: useState2
    };
  }
});

// export-default.mjs
var useEffect = () => {
  console.log("useEffect");
};
var useState = () => {
  console.log("useState");
};
var export_default_default = {
  useEffect,
  useState
};

// export-all.mjs
var sum = (a, b) => a + b;

// main.mjs
var import_module_export = __toESM(require_module_export(), 1);
export_default_default.useEffect();
console.log(sum(1, 2));
