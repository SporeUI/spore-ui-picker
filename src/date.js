/**
@see https://github.com/chmln/flatpickr
**/

var $flatpickr = require('flatpickr');

module.exports = function(options) {
	var conf = $.extend({

	}, options);

	return new $flatpickr(conf);
};
