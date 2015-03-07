var assert = require('assert');
var Homepage = require('../pages/homepage');

var stepDefinitionsWrapper = function() {
  this.World = require("../support/world.js").World;

  this.Given(/^I visit the my homepage$/, function(callback) {
    this.visit('http://localhost:2345');
    callback();
  });


  this.Then(/^I see the header "(.*)"$/, function(expected, callback) {
    this.waitFor(Homepage.header);
    this.driver.findElements({
      css: Homepage.header
    })
      .then(function(elements) {
        assert.notEqual(elements.length, 0);
        callback();
      });
  });
};


module.exports = stepDefinitionsWrapper;