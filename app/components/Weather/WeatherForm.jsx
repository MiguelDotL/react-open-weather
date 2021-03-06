var React = require('react'),

    WeatherForm = React.createClass({

      onFormSubmit: function(e) {
        e.preventDefault();
        var location = this.refs.location.value;

        if (location.length > 0) {
          this.refs.location.value = '';
          this.props.onSearch(location);
        }
      },

      render: function() {
        return(
          <form onSubmit={this.onFormSubmit}>
            <input type="search" ref="location" placeholder="Find Weather in Your City" />

            <button className="hollow button expanded">Get Weather</button>

          </form>
        );
      }
    });

module.exports = WeatherForm;

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&appid=a5c259920430dc0924a6cb9c2df64388
