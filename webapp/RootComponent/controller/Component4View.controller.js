sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/Component", "../model/formatter"],
  function(Controller, Component, formatter) {
    "use strict";

    return Controller.extend(
      "ui.demo.multiComponent.app.RootComponent.controller.Component4View",
      {
        formatter: formatter,

        onInit: function() {
          if (!Component.get("sub4Component")) {
            Component.create({
              name: "ui.demo.multiComponent.app.Sub4Component",
              id: "sub4Component"
            }).then(
              function(Component) {
                this.getView()
                  .byId("sub4CmpCtr")
                  .setComponent(Component);
              }.bind(this)
            );
          }
        }
      }
    );
  }
);
