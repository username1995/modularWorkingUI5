sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "ui/demo/multiComponent/app/Sub4Component/model/formatter"
  ],
  function(Controller, formatter) {
    "use strict";

    return Controller.extend(
      "ui.demo.multiComponent.app.Sub4Component.controller.App",
      {
        formatter: formatter,

        onInit: function() {
          var oViewModel,
          fnSetAppNotBusy,
          iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();
  
        oViewModel = new JSONModel({
          busy : true,
          delay : 0
        });
        this.setModel(oViewModel, "appView");
  
        fnSetAppNotBusy = function() {
          oViewModel.setProperty("/busy", false);
          oViewModel.setProperty("/delay", iOriginalBusyDelay);
        };
  
        // disable busy indication when the metadata is loaded and in case of errors
        this.getOwnerComponent().getModel().metadataLoaded().
          then(fnSetAppNotBusy);
        this.getOwnerComponent().getModel().attachMetadataFailed(fnSetAppNotBusy);
  
        // apply content density mode to root view
        this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());



        }
      }
    );
  }
);
