import { build } from "esbuild";

build({
  entryPoints: ["./main.mjs"],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: "./result/main.mjs",
});
