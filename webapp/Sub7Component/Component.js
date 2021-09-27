sap.ui.define([
	'sap/ui/core/UIComponent',
	'sap/ui/model/json/JSONModel',
	'sap/f/FlexibleColumnLayoutSemanticHelper',
	'sap/f/library'
], function(UIComponent, JSONModel, FlexibleColumnLayoutSemanticHelper, fioriLibrary) {
	'use strict';

	return UIComponent.extend('ui.demo.multiComponent.app.Sub7Component.Component', {

		metadata: {
			manifest: 'json'
		},

		init: function () {
		/*	var oModel,
				oProductsModel,
				oRouter;
*/
			UIComponent.prototype.init.apply(this, arguments);

			this.getRouter().initialize();

		/*	oModel = new JSONModel();
			this.setModel(oModel);

			// set products demo model on this sample
			oProductsModel = new JSONModel(sap.ui.require.toUrl('sap/ui/demo/mock/products.json'));
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, 'products');
/
			oRouter = this.getRouter();
			oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
			oRouter.initialize();
			*/
		},
		destroy : function () {
		//	this.oListSelector.destroy();
	//		this._oErrorHandler.destroy();
			// call the base component's destroy function
			UIComponent.prototype.destroy.apply(this, arguments);
		  },
	  
		  /**
		   * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
		   * design mode class should be set, which influences the size appearance of some controls.
		   * @public
		   * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
		   */
		  getContentDensityClass : function() {
			if (this._sContentDensityClass === undefined) {
			  // check whether FLP has already set the content density class; do nothing in this case
			  // eslint-disable-next-line sap-no-proprietary-browser-api
			  if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
				this._sContentDensityClass = "";
			  }
			  // else if (!Device.support.touch) { // apply "compact" mode if touch is not supported
			//	this._sContentDensityClass = "sapUiSizeCompact";
			 // } 
			  else {
				// "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
				this._sContentDensityClass = "sapUiSizeCozy";
			  }
			}
			return this._sContentDensityClass;
		  }
	/*
		getHelper: function () {
			return this._getFcl().then(function(oFCL) {
				var oSettings = {
					defaultTwoColumnLayoutType: fioriLibrary.LayoutType.TwoColumnsMidExpanded,
					defaultThreeColumnLayoutType: fioriLibrary.LayoutType.ThreeColumnsMidExpanded,
					initialColumnsCount: 2,
					maxColumnsCount: 2
				};
				return (FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings));
			 });
		},

		_onBeforeRouteMatched: function(oEvent) {
			var oModel = this.getModel(),
				sLayout = oEvent.getParameters().arguments.layout,
				oNextUIState;

			// If there is no layout parameter, query for the default level 0 layout (normally OneColumn)
			if (!sLayout) {
				this.getHelper().then(function(oHelper) {
					oNextUIState = oHelper.getNextUIState(0);
					oModel.setProperty("/layout", oNextUIState.layout);
				});
				return;
			}

			oModel.setProperty("/layout", sLayout);
		},

		_getFcl: function () {
			return new Promise(function(resolve, reject) {
				var oFCL = this.getRootControl().byId('flexibleColumnLayout');
				if (!oFCL) {
					this.getRootControl().attachAfterInit(function(oEvent) {
						resolve(oEvent.getSource().byId('flexibleColumnLayout'));
					}, this);
					return;
				}
				resolve(oFCL);

			}.bind(this));
		}

		*/
	});
});