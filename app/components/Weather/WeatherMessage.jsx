var React = require('react'),

    // WeatherMessage = (props) => {
    //   let {temp, location} = props;

    WeatherMessage = ({temp, location}) => {
      return(
        <p>It is {temp} in {location}.</p>
      );
    };

module.exports = WeatherMessage;
