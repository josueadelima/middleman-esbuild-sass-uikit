# General config
# http://localhost:4567/__middleman

# Import custom libraries and helpers
Dir['./*/*.rb'].each { |file| load file }

set :css_dir,    'assets/stylesheets'
set :fonts_dir,  'assets/fonts'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

page '/*.xml',  layout: false
page '/*.json', layout: false
page '/*.txt',  layout: false

activate :external_pipeline,
         name: :esbuild,
         command: "yarn run build --watch",
         source: 'dist',
         latency: 1

activate :external_pipeline,
         name: :sass,
         command: "yarn run build:css --watch",
         source: 'dist',
         latency: 1

activate :livereload

configure :build do
  ignore   File.join(config[:js_dir], '*') # handled by esbuild
  ignore   File.join(config[:css_dir], '*') # handled by sass
  set      :relative_links, true
  activate :asset_hash
  activate :gzip
  activate :relative_assets
end
