
var tas = require('../../../lib');
var test = require('../../../examples/__lib/tester').test;
var runner = require('./tas.await()');

tas(function(){
    var exp = 3;
    var val = runner.get();
    test("2.async tasks: tas.await()", tas, exp, val);
});
