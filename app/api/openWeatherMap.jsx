var axios = require('axios');

const API_KEY = 'a5c259920430dc0924a6cb9c2df64388',
      BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial`;

module.exports = {
  getTemp: function(location) {
    let encodedLocation = encodeURIComponent(location),
        requestUrl = `${BASE_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then (function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      }
      return res.data.main.temp;
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
};

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&appid=a5c259920430dc0924a6cb9c2df64388
