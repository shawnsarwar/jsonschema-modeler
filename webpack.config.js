// webpack.config.js
module.exports = {
    // The standard entry point and output config
    entry: {
        index : "./src"
    },
    output: {
        filename: "./js/[name].js"
    },
    module: {
        loaders: []
    },
    plugins: [
    ]
}

