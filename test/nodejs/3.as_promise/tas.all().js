/**
 * Test of Tas.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/tas
 * Released under the MIT License.
 */

var tas = require('../../../lib');
var request = require('superagent');
var data;

tas.all({
	t1: function(){
		request.get('https://raw.githubusercontent.com/tasjs/tas/master/examples/__res/pics/a.json').end(this.done);
	},

	t2: function(){
		request.get('https://raw.githubusercontent.com/tasjs/tas/master/examples/__res/pics/b.json').end(this.done);
	},

	t3: function(){
		request.get('https://raw.githubusercontent.com/tasjs/tas/master/examples/__res/pics/c.json').end(this.done);
	}
});

tas(function(err, d){
	data = d;
});

module.exports = {
    get: function(){
        return data;
    }
};
