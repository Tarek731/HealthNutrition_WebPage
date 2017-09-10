import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';

const ReactDOM = require('react-dom');
const Link = require('react-router').Link;

// Reactstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
  } from 'reactstrap';

// Include React
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const Main = React.createClass({
// Here we render the function
  render: function () {
    return (
      <div>
        <div className='Navbar'>
          <h2><a href='#'>Website Logo </a></h2>
          <div className='nav'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Products</a></li>
          </div>
        </div>
      </div>
        <div className='row'>
          {this.props.children}
        </div>
    );
  }
});
// Export the component back for use in other files
module.exports = Main;