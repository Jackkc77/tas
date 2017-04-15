/**
 * Test of Tas.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/tas
 * Released under the MIT License.
 */

define(['../tas'],
function(tas) {

	var a = 1;

	tas({
		t1: function () {
			this.a = 1;
		},

		t2: {
			t3: function () {
				this.a++;
			},

			t4: function () {
				[1].forEach(function () {
					this.a++;
				}.bind(this)); // bind this, important!

				this.a++;
			}
		},

		t5: function () {
			this.a++;
			a = this.a;
		}
	});

	return {
		get: function () {
			return a;
		}
	};
});
