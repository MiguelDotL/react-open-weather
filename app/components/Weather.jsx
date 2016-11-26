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
          errorMessage: undefined,
          location: undefined,
          temp: undefined
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
      componentDidMount: function() {
        var location = this.props.location.query.location;

        if(location && location.length > 0) {
          this.handleSearch(location);
          window.location.hash = '#/';
        }
      },
      componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;

        if(location && location.length > 0) {
          this.handleSearch(location);
          window.location.hash = '#/';
        }
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
            <h1 className="page-title">Get Weather</h1>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
            {renderError()}

          </div>
        )
      }
    });

module.exports = Weather;
