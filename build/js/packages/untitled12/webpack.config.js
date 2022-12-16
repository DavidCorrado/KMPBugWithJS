let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/Users/davidcorrado/Projects/ToDo/untitled12/build/js/packages/untitled12/kotlin/untitled12.js"]
};

config.output = {
    path: "/Users/davidcorrado/Projects/ToDo/untitled12/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "untitled12.js"
            : "untitled12-[name].js";
    },
    library: "untitled12",
    libraryTarget: "umd",
    globalObject: "this"
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// dev server
config.devServer = {
  "open": true,
  "static": [
    "/Users/davidcorrado/Projects/ToDo/untitled12/build/processedResources/js/main"
  ],
  "client": {
    "overlay": {
      "errors": true,
      "warnings": false
    }
  }
};

// KotlinWebpackCssRule[css]
;(function(config) {
            const use = [{
    loader: 'style-loader',
    options: {}
},{
    loader: 'css-loader',
    options: {}
}]
config.module.rules.push({
    test: /\.css$/,
    use: use,
    exclude: undefined,
    include: undefined,
})
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/Users/davidcorrado/Projects/ToDo/untitled12/build/reports/webpack/untitled12/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
