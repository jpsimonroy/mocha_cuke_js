var React = require('react');
var views = require('./views/views');
var $ = require('jquery');
var Context = require('./models/context');

$(document).ready(function () {
  var bus = $({});
  new Context(bus);
  var render = function(evt, state){
  	React.render(React.createElement(views.App, state), document.body);
  }
  bus.on('app::state_changed', render);
  bus.on('init::complete', render);
  bus.trigger('init');
});