import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom'

import About from './components/About/About'
import Agents from './components/Agents/Agents'
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'
import Dashboard from './components/Admin/Dashboard'
import Home from './components/Home/Home'
import Orders from './components/Order/Orders'
import Listings from './components/Listings/Listings'
import Login from './components/Auth/Login/Login'
import Users from './components/Auth/Users'
import Register from './components/Auth/Register'

import './sass/normalize.scss'
import './sass/bootstrap-scss/bootstrap.scss'
import './App.scss'

// Class App component
class App extends Component {

    constructor( props ) {
        super( props );
    }

    render() {
        return(
          <BrowserRouter>
             <>
                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route path="/login" component={ Login } />
                  <Route path="/register" component={ Register } />
                  <Route path="/users" component={ Users } />
                  <Route path="/orders" component={ Orders } />
                  <Route path="/listings" component={ Listings } />
                  <Route path="/about" component={ About } />
                  <Route path="/contact" component={ Contact } />
                  <Route path="/dashboard" component={ Dashboard } />

                  <Route path="/clients" component={ Clients } />
                  <Route path="/agents" component={ Agents } />
                </Switch>
              </>
          </BrowserRouter>
        );
    }
}

// render inside 'app' element
ReactDOM.render(
  <App />, document.getElementById( 'app' )
);
