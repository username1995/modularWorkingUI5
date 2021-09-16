sap.ui.define(
  ["sap/ui/core/UIComponent",
   "sap/ui/Device", 
   "./model/models",
   "sap/m/Shell",
   "sap/ui/core/ComponentContainer",
   "sap/ui/core/routing/HashChanger"
  ],
  function(UIComponent, Device, models,Shell, ComponentContainer, HashChanger) {
    "use strict";

    return UIComponent.extend(
      "ui.demo.multiComponent.app.Sub2Component.Component",
      {
        metadata: {
          manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function() {


          // call the base component's init function
          UIComponent.prototype.init.apply(this, arguments);

          // set the device model
          this.setModel(models.createDeviceModel(), "device");

          // create the views based on the url/hash
          this.getRouter().initialize();
        }
      }
    );
  }
);
