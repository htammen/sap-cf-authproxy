var approuter = require("@sap/approuter");

var ar = approuter();

ar.beforeRequestHandler.use(
  "/backend/$batch",
  function myMiddleware(req, res, next) {
    req.headers["x-baudienstleister"] = "Baudienstleister-App";
    req.headers["x-baudienstleister-auth"] = req.headers.authorization
      ? req.headers.authorization
      : "no jwt token";
    req.headers["x-baudienstleister-user"] = req.user
      ? JSON.stringify(req.user)
      : "no user";
    next();
  }
);
ar.start();
