const path = require('path')
const rails = require('esbuild-rails')

require("esbuild").build({
  entryPoints: ["application.js"],
  bundle: true,
  outdir: path.join(process.cwd(), "/dist"),
  absWorkingDir: path.join(process.cwd(), "/source/assets/javascripts"),
  watch: true,
  plugins: [rails()],
}).catch(() => process.exit(1))
