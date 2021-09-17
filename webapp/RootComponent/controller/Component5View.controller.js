sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/Component", "../model/formatter"],
  function(Controller, Component, formatter) {
    "use strict";

    return Controller.extend(
      "ui.demo.multiComponent.app.RootComponent.controller.Component5View",
      {
        formatter: formatter,

        onInit: function() {
          if (!Component.get("sub5Component")) {
            Component.create({
              name: "ui.demo.multiComponent.app.Sub5Component",
              id: "sub5Component"
            }).then(
              function(Component) {
                this.getView()
                  .byId("sub5CmpCtr")
                  .setComponent(Component);
              }.bind(this)
            );
          }
        }
      }
    );
  }
);
