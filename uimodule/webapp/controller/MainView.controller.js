sap.ui.define([
  "net/prp/dienstleister/fe/prpFESample/controller/BaseController"
], function(Controller) {
  "use strict";

    return Controller.extend(
      "net.prp.dienstleister.fe.prpFESample.controller.MainView",
      {
        onLogout: function () {
          jQuery
            .ajax({
              type: "POST",
              url: "/backend/logout",
              async: false,
              headers: { Authorization: "Basic xxx" },
            })
            .done(function () {
              // this should not happen, as the server returns a 401 error code
            })
            .fail(function (err) {
              // 401 Unauthorized error means we are successfully logged out.
              // This causes the browser to forget the credentials.
              // Redirect to get a login box again.
              window.location = "/index.html";
            });
          return false;
        },
      }
    );
});
