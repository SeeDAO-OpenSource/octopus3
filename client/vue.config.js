const path = require('path');
module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'zh',
            fallbackLocale: 'zh',
            localeDir: 'locales',
            enableInSFC: false
        }
    },
    chainWebpack: config => {
        // Remove prefetch plugin and that's it!
        config.plugins.delete('prefetch');
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', 'css', 'scss', '.vue'],
            alias: {
                '@themeConfig': path.resolve(__dirname, 'theme.config.js'),                
            }
        }
    }
};
