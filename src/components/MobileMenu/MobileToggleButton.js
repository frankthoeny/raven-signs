import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import './mobileMenu.scss';

class MobileToggleButton extends Component {

  render() {
     return(
        <button className="button-toggle">
          <div className="toggle-button__line"></div>
          <div className="toggle-button__line"></div>
          <div className="toggle-button__line"></div>
        </button>

    )
  }
}

export default MobileToggleButton;
