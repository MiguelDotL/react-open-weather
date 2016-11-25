var React = require('react'),

    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),
    openWeatherMap = require('openWeatherMap'),
    ErrorModal = require('ErrorModal'),

    Weather = React.createClass({

      getInitialState: function() {
        return {
          isLoading: false
        }
      },

      handleSearch: function(location) {
        let that = this;

        this.setState({
          isLoading: true,
          errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(function (temp) {
          that.setState({
            location: location,
            temp: temp,
            isLoading: false
          });
        },
        function (e) {
          that.setState({
            isLoading: false,
            errorMessage: e.message
          });
        });
      },

      render: function() {
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
          if(isLoading) {
            return <h3>Getting Weather...</h3>;

          } else if (temp && location) {
            return <WeatherMessage temp={temp} location={location} />;
          }
        }

        function renderError() {
          if(typeof errorMessage === 'string') {
            return(
              <ErrorModal message={errorMessage}/>
            )
          }
        }

        return(
          <div className="text-center">
            <h1>Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            {renderError()}

          </div>
        )
      }
    });

module.exports = Weather;
