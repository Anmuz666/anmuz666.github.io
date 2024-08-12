const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/",
  outputDir: "dist",
  assetsDir:"static",
  mode: 'history',
  routes: [
    {
      path: '/<repository-name>',
      component: MainComponent
    }
  ],
  transpileDependencies: true
})
