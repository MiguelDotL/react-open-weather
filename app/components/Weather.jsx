var React = require('react'),

    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),
    openWeatherMap = require('openWeatherMap'),

    Weather = React.createClass({

      getInitialState: function() {
        return {
          isLoading: false
        }
      },

      handleSearch: function(location) {
        let that = this;

        this.setState({ isLoading: true });

        openWeatherMap.getTemp(location).then(function(temp) {
          that.setState({
            location: location,
            temp: temp,
            isLoading: false
          });
        }, function(errorMessage) {
          that.setState({ isLoading: false });
          alert(errorMessage);
        });
      },

      render: function() {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
          if(isLoading) {
            return <h3>Getting Weather...</h3>;

          } else if (temp && location) {
            return <WeatherMessage temp={temp} location={location} />;
          }
        }

        return(
          <div className="text-center">
            <h1>Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
          </div>
        )
      }
    });

module.exports = Weather;
