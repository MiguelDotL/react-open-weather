var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      // --------Main App Components--------//
      Nav: 'app/components/Nav.jsx',
      Main: 'app/components/Main.jsx',
      styles: 'app/styles/style.css',

      // --------Weather Components--------//
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/Weather/WeatherForm.jsx',
      WeatherMessage: 'app/components/Weather/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',

      // --------About Components--------//
      About: 'app/components/About.jsx',

      // --------Example Components--------//
      Examples: 'app/components/Examples.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
};
