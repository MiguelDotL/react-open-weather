var React = require('react'),
    { Link, IndexLink } = require('react-router'),

    Nav = React.createClass({

      onSearch: function(e) {
        e.preventDefault();
        alert("Not Wired-Up Yet!")
      },
      render: function() {
        return(
          <div className="top-bar">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">
                  reactOpenWeather
                </li>
                <li>
                  <IndexLink to="/"
                    activeClassName="active"
                    activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                </li>
                <li>
                  <IndexLink to="/about"
                    activeClassName="active"
                    activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
                </li>
                <li>
                  <IndexLink to="/examples"
                      activeClassName="active"
                      activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
                </li>
              </ul>
            </div>
            <div className="top-bar-right">
              <form onSubmit={this.onSearch}>
                <ul className="menu">
                  <li>
                    <input type="search" placeholder="Enter Location"/>
                  </li>
                  <li>
                    <input type="submit" className="button" value="Get Weather"/>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        );
      }
    });

module.exports = Nav;




{/* <div>
  <h2>Nav Component</h2>
  <IndexLink to="/"
    activeClassName="active"
    activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
  <IndexLink to="/about"
    activeClassName="active"
    activeStyle={{fontWeight: 'bold'}}>About</IndexLink> |
  <IndexLink to="/examples"
      activeClassName="active"
      activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
</div> */}
