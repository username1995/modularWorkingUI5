sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/Component", "../model/formatter"],
  function(Controller, Component, formatter) {
    "use strict";

    return Controller.extend(
      "ui.demo.multiComponent.app.RootComponent.controller.Component6View",
      {
        formatter: formatter,

        onInit: function() {
          if (!Component.get("sub6Component")) {
            Component.create({
              name: "ui.demo.multiComponent.app.Sub6Component",
              id: "sub6Component"
            }).then(
              function(Component) {
                this.getView()
                  .byId("sub6CmpCtr")
                  .setComponent(Component);
              }.bind(this)
            );
          }
        }
      }
    );
  }
);
