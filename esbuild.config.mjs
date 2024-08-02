import esbuild from 'esbuild'
import path from 'path'

const context = await esbuild.context({
  bundle: true,
  entryPoints: ["source/assets/javascripts/application.js"],
  outdir: path.join(process.cwd(), ".tmp"),
  minify: process.argv.includes("--minify"),
  sourcemap: process.argv.includes("--sourcemap"),
})
if(process.argv.includes("--watch")) {
  // Manually do an incremental build
  await context.rebuild()

  // Enable watch mode
  await context.watch()

  // Enable serve mode
  await context.serve()
} else {
  await context.rebuild()

  context.dispose()
}
