import React from "./export-default.mjs";
import * as math from "./export-all.mjs";

// CommonJS 한 술갈 첨가.
// 난 사용한적 없는뎁숑 ;;
import Math2 from "./module-export.cjs";

React.useEffect();

console.log(math.sum(1, 2));
