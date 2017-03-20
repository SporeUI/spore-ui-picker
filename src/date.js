/**
@see https://github.com/chmln/flatpickr
**/

require('flatpickr/dist/flatpickr.css');

var $flatpickr = require('flatpickr');
var $locale = require('flatpickr/dist/l10n/zh');

$flatpickr.l10ns.zh = $locale.zh;

module.exports = function(options) {
	var conf = $.extend({
		node: null,
		locale: $flatpickr.l10ns.zh
	}, options);

	var node = conf.node;
	delete conf.node;

	return new $flatpickr(node, conf);
};
