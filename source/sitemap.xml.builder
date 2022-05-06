# frozen_string_literal: true

xml.instruct!

xml.urlset 'xmlns' => 'http://www.sitemaps.org/schemas/sitemap/0.9' do
  sitemap.resources.each do |resource|
    next if resource.url == '/_redirects'
    next unless resource.url !~ /\.(css|js|eot|svg|woff|ttf|png|jpg|jpeg|gif|keep|otf|map)$/

    xml.url do
      xml.loc URI.join(config[:host], resource.url)
    end
  end
end
