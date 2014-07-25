source 'https://rubygems.org'

gem 'rails', '3.2.18'
gem 'mysql2'

gem 'sass', '3.2.13'  # 3.3 has a bug that causes cannot dump anonymous class warnings


#
# https://github.com/twbs/bootstrap-sass/issues/589
#
gem 'bootstrap-sass', '3.1.1.0'
gem 'font-awesome-rails'

gem 'validates_email_format_of', :git => 'git://github.com/alexdunae/validates_email_format_of.git'

gem 'execjs'


#
# https://github.com/twbs/bootstrap-sass/commit/1a4ff080af2be55f1c17b5d2c99eb5f31aaf2e97
#
gem 'sass-rails'
group :assets do
   gem 'coffee-rails'
   gem 'uglifier'
   # gem 'turbo-sprockets-rails3', '>= 0.3'  # Unfortunately, it's broken (leaves an 'Uglifier' reference in a sprocket)
end

gem 'jquery-rails', "~> 2.1.2"

group :development, :test do
  gem 'rspec-rails' #, '2.6.1'
  gem 'timecop'

  gem 'rb-fsevent'
  gem 'ruby_gntp'
  gem 'guard-rspec'
end



