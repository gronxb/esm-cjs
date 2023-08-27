import { build } from "esbuild";

build({
  entryPoints: ["./esm-to-esm.mjs"],
  bundle: true,
  minify: true,
  format: "esm",
  platform: "node",
  outfile: "./result/esm-to-esm.mjs",
});
build({
  entryPoints: ["./cjs-to-esm.mjs"],
  bundle: true,
  minify: true,
  format: "esm",
  platform: "node",
  outfile: "./result/cjs-to-esm.mjs",
});
build({
  entryPoints: ["./cjs-to-cjs.cjs"],
  bundle: true,
  minify: true,
  format: "cjs",
  platform: "node",
  outfile: "./result/cjs-to-cjs.cjs",
});
build({
  entryPoints: ["./esm-to-cjs.cjs"],
  bundle: true,
  minify: true,
  format: "cjs",
  platform: "node",
  outfile: "./result/esm-to-cjs.cjs",
});
