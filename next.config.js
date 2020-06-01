const path = require('path');
const withSass = require("@zeit/next-sass");
const withReactSvg = require('next-react-svg');
module.exports = withSass({
  cssLoaderOptions: {
    importLoaders: 2
  },
});

// module.exports = withReactSvg({
//   exclude: path.resolve(__dirname, 'public/svg'),
//   webpack(config, options) {
//     return config
//   }
// })