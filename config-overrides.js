/* config-overrides.js */
const { override } = require('customize-cra')

const addCustomize = () => config => {
  require('react-app-rewire-postcss')(config, {
    plugins: loader => [
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3
      }),
      require('postcss-px-to-viewport')({
        viewportWidth: 750, // (Number) The width of the viewport.
        viewportHeight: 1334, // (Number) The height of the viewport.
        unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
        viewportUnit: 'vw', // (String) Expected units.
        selectorBlackList: ['.ignore', '.hairlines', '.pc'], // (Array) The selectors to ignore and leave as px.
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
        mediaQuery: false // (Boolean) Allow px to be converted in media queries.
      }),
      require('cssnano')({
        preset: 'advanced',
        autoprefixer: false,
        'postcss-zindex': false
      })
    ]
  })
  return config
}

module.exports = override(addCustomize())