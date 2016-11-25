// import React, { Component } from 'react';
//
// export default class Main extends Component {
//
// }

var React = require('react'),

    Nav = require('Nav'),
    Weather = require('Weather'),
    Examples = require('Examples'),

    Main = (props) => {
      return(
        <div>
          <Nav />
          <div className="row">
            <div className="columns medium-6 large-4 small-centered">
              {props.children}

            </div>
          </div>
        </div>
      );
    };

module.exports = Main;
