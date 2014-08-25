require File.expand_path('../boot', __FILE__)


require "action_controller/railtie" 
require "action_mailer/railtie" 
require "active_resource/railtie" 
require "rails/test_unit/railtie" 
require "sprockets/railtie"


# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module FrontEndChallenge
  class Application < Rails::Application
   #config.i18n.enforce_available_locales = false
    I18n.enforce_available_locales = false

    # Enable the asset pipeline
    config.assets.enabled = true

    config.assets.paths << Rails.root.join("app", "assets")
    
    config.assets.version = '1.0'

    
    config.encoding = "utf-8"

    
    config.assets.initialize_on_precompile = false

    
    config.assets.precompile +=
      ['*.js', 'application_page.css']

 


  end
end
