import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  NavLink as Link,
  Route
} from 'react-router-dom';

import './Footer.scss';

// news and events component
class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

   render() {
     return (
       <footer className="footer">
          <nav className="navbar navbar-expand-md navbar-dark justify-content-center">
             <ul className="nav navbar-nav align-items-end">
             <li className="nav-item"><Link exact to="/" className="nav-link">Home</Link></li>
             <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
             <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
             <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
             </ul>
          </nav>
          <p className="text-light text-center">
              Powered by React / Redux / Webpack
          </p>
       </footer>

     )
  }
}

export default Footer;
