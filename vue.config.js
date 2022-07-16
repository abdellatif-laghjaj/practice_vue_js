const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
});

module.exports = {
    chainWebpack: (config) => {
        config.module.rules.delete("eslint");
    },
};
