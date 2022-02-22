const path = require("path");
module.exports = {
    entry: './assets/js/script.js',
    outout: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    mode: 'development'
};
