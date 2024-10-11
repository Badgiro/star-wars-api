const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@UI": "src/components/UI",
    "@constants": "src/constants",
    "@containers": "src/containers",
    "@helpers": "src/helpers",
    "@services": "src/services",
    "@styles": "src/styles",
    "@utils": "src/utils",
    "@routes": "src/routes",
    "@static":"src/static",
    "@hooks":"src/hooks"
  })(config);

  return config;
};
