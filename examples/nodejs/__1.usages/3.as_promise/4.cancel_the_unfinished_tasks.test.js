
var tas = require('../../../../lib');
var test = require('../../../util').test;
var runner = require('./2.use_tas.race()_as_promise.race()');

tas(function(){
    var exp = 'object';
    var val = typeof runner.get();
    test("as promise: use tas.race() as promise.race()", tas, exp, val);
});
