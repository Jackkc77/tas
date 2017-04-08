/**
 * Tas.js v2.0.0
 * (c) 2017 Owen Luke
 * https://github.com/hiowenluke/tas
 * Released under the MIT License.
 */

(function(){

	var all = {
		do: function(tasks, promise){
			var len = Object.keys(tasks).length;
			var count = 0;
			var error = null;
			var results = [];

			tasks.done = function(err, data){
				count ++;

				err && (error = err);
				results.push(data);

				if (count === len) {
					promise.done([error, results]);
				}
			};

			promise.exec(tasks);
		}
	};

	module.exports = (all);
})();