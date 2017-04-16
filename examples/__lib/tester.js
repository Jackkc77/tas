/**
 * Tester of examples of Tas.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/tas
 * Released under the MIT License.
 */

(function(r,f){if(typeof process==='object'&&process.title==="node"){module.exports=f(r);return;}if(typeof define==='function'&&define.amd){define(function(){return f(r,r.document)});return}if(typeof exports==='object'){module.exports=r.document?f(r,r.document):function(w){return f(w,w.document)};return}f(r,r.document)}(typeof window!=="undefined"?window:this,function(window, document){

	var tester = {
		data: [],

		init: function(data){
			this.data = data;
		},

		test: function(describe, tas, exp, val){
			var result = exp === val ? 'ok' : 'x';
			var count = tas.count = typeof tas.count === 'undefined' ? 1 : tas.count + 1;
			count = ('00' + count).substr(-2);

			console.log('%s %s -- %s -- should return %s', result, count, describe, exp);
			result === 'x' && tas.abort();
		},

		getFiles: function(options){
			var getOption = function(options, prop, def){
				options = options || {};
				return typeof options[prop] === 'undefined' ? def : options[prop];
			};

			var isTestFileOnly = getOption(options, 'isTestFileOnly', false);
			var isNoExtName = getOption(options, 'isNoExtName', false);
			var prefix = getOption(options, 'prefix', './');
			var arr = [];

			prefix.substr(-1) !== '/' && (prefix += '/');
			this.data.forEach(function(file){

				if (!file) return;
				if (!isTestFileOnly || /\.test\b/.test(file)) {

					if (isNoExtName) {
						file = file.replace(/\.js$/, '');
					}

					if (prefix) {
						file  = prefix + file;
					}

					arr.push(file);
				}
			});

			return arr;
		},

		getOrder: function(modules){
			var obj = {};
			for (var i = 1; i < modules.length; i ++) {
				obj[modules[i]] = [modules[i - 1]];
			}
			return obj;
		},

		getNumber: function(testFiles){
			var number = 0;
			testFiles.forEach(function(file){
				if (/\.test\b/.test(file)) number ++;
			});
			return number;
		}

	};

	typeof window === 'object' && typeof define !== 'function' &&
	typeof exports !== 'object' && (window.tester = tester);

	return tester;
}));
