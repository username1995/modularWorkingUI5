sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "ui/demo/multiComponent/app/Sub3Component/model/formatter"
  ],
  function(Controller, formatter) {
    "use strict";

    return Controller.extend(
      "ui.demo.multiComponent.app.Sub3Component.controller.App",
      {
        formatter: formatter,

        onInit: function() {}
      }
    );
  }
);
