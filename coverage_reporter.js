var istanbul = require('istanbul'),
  collector = new istanbul.Collector(),
  reporter = new istanbul.Reporter(),
  sync = false;
var _ = require('underscore');
var fs = require('fs');

var coverage_files = process.argv.slice(2);
_.each(coverage_files, function(file) {
  collector.add(JSON.parse(fs.readFileSync(file, 'utf8')));
});

reporter.add('text');
reporter.addAll(['lcov', 'clover']);
reporter.write(collector, sync, function() {
  console.log('All reports generated');
});