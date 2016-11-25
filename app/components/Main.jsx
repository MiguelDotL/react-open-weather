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
          <h2>Main Component</h2>
          {props.children}
        </div>
      );
    };

module.exports = Main;
