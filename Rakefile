require 'zlib'
require 'socket'
require 'mustache'
require 'active_support'
require 'uglifier'
require "yui/compressor"


def put_options data, bucket, key, cache_options, content_type
  {
    acl: 'public-read',
    body:  ActiveSupport::Gzip.compress(data),
    key: key,
    bucket: bucket,
    content_type: "#{content_type}; charset=UTF-8",
    content_encoding: 'gzip',
    cache_control: cache_options
  }
end

def render css_data, js_data, host
  Mustache.render template, {
    css: css_data,
    js: js_data,
    host: host
  }
end

def template
  File.read('./template.html')
end

def css
  File.read('./build/main.css', :encoding => 'utf-8')
end

def js
  File.read('./build/main.js', :encoding => 'utf-8')
end

def compiled_css
  YUI::CssCompressor.new.compress css
end

def compiled_js
  Uglifier.compile js
end

task :gulp do
  system 'gulp compile'
end

task :cukes do
  system './node_modules/.bin/cucumber.js -f pretty -t ~@ignore'
end

task :spec  do
  system 'mocha'
end

task :all_spec  => [:spec, :cukes] {}

task :stubs do
  system 'sh stub.sh restart'
end

task :local_server => [:gulp, :stubs] do
  server = TCPServer.new('localhost', 2345)
  loop do
    socket = server.accept
    request = socket.gets
    STDERR.puts request
    response = render css, js, "http://localhost:5554"

    socket.print "HTTP/1.1 200 OK\r\n" +
      "Content-Type: text/html\r\n" +
      "Content-Length: #{response.bytesize}\r\n" +
      "Connection: close\r\n"
    socket.print "\r\n"
    socket.print response
    socket.close
  end
end
