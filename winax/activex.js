var ActiveX = (module.exports = require("./node_activex.node"));

global.ActiveXObject = function (id, opt) {
  return new ActiveX.Object(id, opt);
};
