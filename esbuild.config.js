const path = require("path")

require("esbuild").build({
  bundle: true,
  entryPoints: ["source/assets/javascripts/application.js"],
  outdir: path.join(process.cwd(), ".tmp"),
  watch: process.argv.includes("--watch"),
  minify: process.argv.includes("--minify"),
  sourcemap: process.argv.includes("--sourcemap"),
}).catch(() => process.exit(1))
