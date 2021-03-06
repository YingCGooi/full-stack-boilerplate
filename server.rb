require 'sinatra'
require 'sinatra/contrib'
require 'rack/contrib'

use Rack::PostBodyContentTypeParser

configure(:development) do
  require 'sinatra/reloader'
  also_reload 'public/index.html'
end

get '/' do
  send_file 'public/index.html', type: :html
end