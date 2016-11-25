var React = require('react'),
    ReactDOM = require('react-dom'),
    { Route, Router, IndexRoute, hashHistory } = require('react-router'),

    Main = require('Main'),
    About = require('About'),
    Weather = require('Weather'),
    Examples = require('Examples');

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// require('style!css!../app/styles/style.css')
require('style!css!styles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather} />
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
    </Route>
  </Router>,
  document.getElementById('app')
);
