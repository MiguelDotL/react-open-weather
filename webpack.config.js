module.exports = {
  entry: './app/app.jsx',
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

      // --------Weather Components--------//
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/Weather/WeatherForm.jsx',
      WeatherMessage: 'app/components/Weather/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',

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
