import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {logout} from '../../utils/AuthService.js';

class SignsToolbar extends Component {

  constructor(props) {
    super(props);
  }

  handleLogoutClick = () =>{
      logout()
  }

  componentDidMount() {
     axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
  }

  render() {
    return (
      <header className="toolbar fixed-top">
         <nav className="toolbar__navigation navbar navbar-expand-md navbar-dark">
           <div className="navbar-brand align-items-center">
              <img src="/images/logo.png" className="d-inline-block mr-2"
                 alt="Raven Signs" />
              <span className="h2 font-weight-bold">Raven Signs</span>
           </div>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="navbar-collapse collapse mr-auto" id="navbarCollapse">
             <span className="h4 font-weight-bold text-white mx-auto">Signs Catalog</span>
             <div className="nav navbar-nav align-self-end">
               <Link to="/signs/create" className="nav-item nav-link">Add Sign</Link>
               <Link to="/signs" className="nav-item nav-link">View All Signs</Link>
               <button onClick={this.handleLogoutClick} className="btn btn-primary">Logout</button>
             </div>
          </div>
        </nav>
    </header>
    );
  }
}

export default SignsToolbar;
