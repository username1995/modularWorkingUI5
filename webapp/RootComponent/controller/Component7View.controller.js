sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/Component", "../model/formatter"],
  function(Controller, Component, formatter) {
    "use strict";

    return Controller.extend(
      "ui.demo.multiComponent.app.RootComponent.controller.Component7View",
      {
        formatter: formatter,

        onInit: function() {
          if (!Component.get("sub7Component")) {
            Component.create({
              name: "ui.demo.multiComponent.app.Sub7Component",
              id: "sub7Component"
            }).then(
              function(Component) {
                this.getView()
                  .byId("sub7CmpCtr")
                  .setComponent(Component);
              }.bind(this)
            );
          }
        }
      }
    );
  }
);
