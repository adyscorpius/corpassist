'use strict';
var Contact = function() {

	// function to handle GMaps Plugin
	var gmapsHandler = function() {
		map = new GMaps({
			div : '#map',
			lat : 28.558798,
			lng : 77.247311
		});
		map.addMarker({
			lat : 28.558798,
			lng : 77.247311,
			title : 'Corpassist Services',
			click : function(e) { // https://goo.gl/maps/UtVgVdcENH62
				var url = 'https://goo.gl/maps/UtVgVdcENH62';
				var win = window.open(url, '_blank');
  				win.focus();
			}
		});
	};

	return {
		init : function() {
			gmapsHandler();
		}
	};
}();
