const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //devServer: {
  //  proxy: {
  //    'https://map.yahooapis.jp': {
  //      target: 'http://localhost:8080',
  //    }
  //  }
  //},


  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
