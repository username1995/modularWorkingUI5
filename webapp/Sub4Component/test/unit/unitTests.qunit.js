/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ui/demo/multiComponent/app/sub4component/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});