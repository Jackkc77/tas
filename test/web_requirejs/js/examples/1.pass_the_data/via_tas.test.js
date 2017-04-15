/**
 * Test of Tas.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/tas
 * Released under the MIT License.
 */

define(['../tas', '../tester', './via_tas'],
function(tas, tester, runner) {

	tas(function () {
		var exp = 7;
		var val = tas.a;
		tester.test("1.pass the data: via tas", tas, exp, val);
	});
});
