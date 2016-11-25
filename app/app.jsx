var React = require('react'),
    ReactDOM = require('react-dom'),
    { Route, Router, IndexRoute, hashHistory } = require('react-router'),

    Main = require('Main'),
    About = require('About'),
    Weather = require('Weather'),
    Examples = require('Examples');


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
