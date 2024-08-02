import esbuild from 'esbuild'
import path from 'path'

const context = await esbuild.context({
  bundle: true,
  entryPoints: ["source/assets/javascripts/application.js"],
  outdir: path.join(process.cwd(), ".tmp/assets/javascripts"),
  minify: process.argv.includes("--minify"),
  sourcemap: process.argv.includes("--sourcemap"),
})

if(process.argv.includes("--watch")) {
  await context.watch()
} else {
  await context.rebuild()
  context.dispose()
}
