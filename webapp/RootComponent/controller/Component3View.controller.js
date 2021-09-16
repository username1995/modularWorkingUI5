sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/Component", "../model/formatter"],
  function(Controller, Component, formatter) {
    "use strict";

    return Controller.extend(
      "ui.demo.multiComponent.app.RootComponent.controller.Component3View",
      {
        formatter: formatter,

        onInit: function() {
          if (!Component.get("sub3Component")) {
            Component.create({
              name: "ui.demo.multiComponent.app.Sub3Component",
              id: "sub3Component"
            }).then(
              function(Component) {
                this.getView()
                  .byId("sub3CmpCtr")
                  .setComponent(Component);
              }.bind(this)
            );
          }
        }
      }
    );
  }
);
