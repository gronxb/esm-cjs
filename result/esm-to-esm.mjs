var B=typeof global=="object"&&global&&global.Object===Object&&global,x=B;var k=typeof self=="object"&&self&&self.Object===Object&&self,T=x||k||Function("return this")(),i=T;var R=i.Symbol,a=R;var n=Object.prototype,P=n.hasOwnProperty,L=n.toString,s=a?a.toStringTag:void 0;function E(e){var r=P.call(e,s),o=e[s];try{e[s]=void 0;var f=!0}catch{}var t=L.call(e);return f&&(r?e[s]=o:delete e[s]),t}var c=E;var F=Object.prototype,z=F.toString;function N(e){return z.call(e)}var g=N;var q="[object Null]",C="[object Undefined]",h=a?a.toStringTag:void 0;function D(e){return e==null?e===void 0?C:q:h&&h in Object(e)?c(e):g(e)}var b=D;function M(e){return e!=null&&typeof e=="object"}var p=M;var U=Array.isArray,y=U;var G="[object Arguments]";function K(e){return p(e)&&b(e)==G}var m=K;var O=Object.prototype,V=O.hasOwnProperty,J=O.propertyIsEnumerable,H=m(function(){return arguments}())?m:function(e){return p(e)&&V.call(e,"callee")&&!J.call(e,"callee")},j=H;function Q(e,r){for(var o=-1,f=r.length,t=e.length;++o<f;)e[t+o]=r[o];return e}var I=Q;var S=a?a.isConcatSpreadable:void 0;function X(e){return y(e)||j(e)||!!(S&&e&&e[S])}var w=X;function v(e,r,o,f,t){var u=-1,W=e.length;for(o||(o=w),t||(t=[]);++u<W;){var l=e[u];r>0&&o(l)?r>1?v(l,r-1,o,f,t):I(t,l):f||(t[t.length]=l)}return t}var A=v;function Y(e){var r=e==null?0:e.length;return r?A(e,1):[]}var d=Y;console.log(d([1,[2,[3,[4]],5]]));
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
