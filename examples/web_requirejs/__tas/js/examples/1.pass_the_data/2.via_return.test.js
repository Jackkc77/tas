/**
 * Test of Tas.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/tas
 * Released under the MIT License.
 */

define(['../tas', '../tester', './2.via_return'],
function(tas, tester, viaReturn) {

	tas(function(){

		var test = tester.test;
		var runner = viaReturn;

		var exp = 81;
		var val = runner.get();

		test("1.pass the data: via return", tas, exp, val);
	});
});
