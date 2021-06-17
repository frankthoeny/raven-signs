import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';

import './Contact.scss';
import Layout from '../../Layout';

// Class App component
class Contact extends Component {
  constructor( props ) {
      super( props );
  }
    render() {
        return(
          <Layout>
            <section>
                <h1>Contact Component!</h1>
            </section>
         </Layout>
        )
     }
}
export default Contact;
