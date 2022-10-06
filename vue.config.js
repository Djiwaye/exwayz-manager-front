module.exports = {
  transpileDependencies: ['vuetify'],
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Exwayz SLAM manager'
    }
  },
  devServer: {
    port: 8081,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: 'http://localhost:3000/'
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/style/import/breakpoints.scss";
          @import "@/assets/style/import/vars.scss";
          `
      }
    }
  }
};
