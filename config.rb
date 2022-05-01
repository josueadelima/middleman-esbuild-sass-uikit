# General config
# http://localhost:4567/__middleman

# Import custom libraries and helpers
Dir['./*/*.rb'].each { |file| load file }

set :css_dir,    'assets/stylesheets'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

activate :external_pipeline,
         name: :esbuild_and_sass,
         command: build? ? 'yarn run build && yarn run build:css' : 'yarn run watch && yarn run watch:css',
         source: '.tmp',
         latency: 1

activate :directory_indexes

activate :livereload

page '/*.xml',  layout: false
page '/*.json', layout: false
page '/*.txt',  layout: false

configure :development do
  set      :debug_assets, true
end

configure :build do
  # handled by esbuild
  ignore   File.join(config[:js_dir], '*')
  # handled by npm sass
  ignore   File.join(config[:css_dir], '*')
  set      :relative_links, true
  activate :asset_hash
  activate :gzip
  activate :minify_css
  activate :relative_assets
end
