import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Toolbar.scss';
import {navbarScroll} from '../../utils/navScroll'

// Toolbar component
class toolbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transform: null,
    };
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
   }

   handleScroll = (event) => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      this.setState({
         transform: scrollTop
      });

      // Usage:
      //<nav className={`toolbar__navigation ${(this.state.transform > 22)? ('transparent'):('')}`}>
      // Fixed Top, Transition, opacity and height styles
      //console.log(this.state.transform);
   }

  render() {
     return(
      <header className="toolbar fixed-top">
         <nav className={`toolbar__navigation navbar navbar-expand-md navbar-dark ${(this.state.transform > 22)? ('transparent'):('')}`}>
           <div className="navbar-brand align-items-center">
              <img src="/images/logo.png" className="d-inline-block mr-2"
                 alt="Raven Signs" />
              <span className="h2">Raven Signs</span>
           </div>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="navbar-collapse collapse justify-content-end" id="navbarCollapse" >
              <ul className="navbar-nav nav align-items-end">
                 <li className="nav-item">
                    <Link exact to="/" className="nav-item nav-link"
                       activeClassName="active">Home
                     <span className="sr-only">(current)< /span>
                    </Link>
                 </li>
                 <li className="nav-item">
                    <Link to="/about" className="nav-item nav-link"
                      activeClassName="active">About
                    </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/contact"
                       className="nav-item nav-link"
                       activeClassName="active">Contact
                     </Link>
                  </li>
                </ul>
                </div>
             </nav>
          </header>
        )
    }
}

export default toolbar;
