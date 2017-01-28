module.exports = {
    context: __dirname + "/src",

    entry: "./scripts/app.js",

    resolve: {
        extensions : ['', '.js', '.jsx', '.json']
    },

    module : {
        loaders : [
            {
                test : /\.jsx?$/,
                exclude : /node_modules/,
                loaders : ["babel-loader"]
            }
        ]
    },

    output: {
        filename : "app.js",
        path: __dirname + "/dist"
    }
}