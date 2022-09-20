// next.config.js
const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');

const nextConfig = {
    async headers() {
        return []
    },
    target: 'serverless',
    api: {
        bodyParser: true
    },
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        })
        return config
    },
    // css/less specific configs
    cssModules: false,
    // cssLoaderOptions: {
    //     importLoaders: 1,
    //     localIdentName: "[local]___[hash:base64:5]",
    // },
    // add trailing slash and index.html files per folder
    trailingSlash: true
}

module.exports = withLess(withCSS({
    ...nextConfig
}));
