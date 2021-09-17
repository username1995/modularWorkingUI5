sap.ui.define(["sap/ui/core/mvc/Controller", "../model/formatter"], function(
  Controller,
  formatter
) {
  "use strict";

  return Controller.extend(
    "ui.demo.multiComponent.app.RootComponent.controller.Master",
    {
      formatter: formatter,

      onInit: function() {},

      onPressNavSub1: function() {
        this.getOwnerComponent()
          .getRouter()
          .navTo("sub1ComponentView", {
            viewPattern: "view1"
          });
      },

      onPressNavSub2: function() {
        this.getOwnerComponent()
          .getRouter()
          .navTo("sub2ComponentView", {
            viewPattern: "view1"
          });
      },
      onPressNavSub3: function() {
        this.getOwnerComponent()
          .getRouter()
          .navTo("sub3ComponentView", {
            viewPattern: "view1"
          });
      },
      onPressNavSub4: function() {
        this.getOwnerComponent()
          .getRouter()
          .navTo("sub4ComponentView", {
            viewPattern: "view1"
          });
      },
      onPressNavSub5: function() {
        this.getOwnerComponent()
          .getRouter()
          .navTo("sub5ComponentView", {
            viewPattern: "view1"
          });
      }


    }
  );
});
