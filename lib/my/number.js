/**
 * Tas.js v2.0.0
 * (c) 2017 Owen Luke
 * https://github.com/hiowenluke/tas
 * Released under the MIT License.
 */

(function(){

	var number = {
		value: 0,
		
		get: function(){
			return this.value;
		},

		add: function(){
			this.value ++;
		},

		sub: function(){
			this.value --;
		},

		set: function(val){
			this.value = val;
		},

		save: function(val){
			this.set(val);
		}
	};

	module.exports = (number);
})();