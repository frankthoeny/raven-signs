import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';

import './About.scss';
import Layout from '../../Layout';

// Class App component
class About extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return(
          <Layout>
             <section>
                <h1>About Component!</h1>
           </section>
        </Layout>
    );
  }
}

export default About;
