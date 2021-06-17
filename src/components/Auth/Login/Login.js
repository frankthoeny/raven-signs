import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';
import axios from 'axios';

import './Login.scss';
import {AuthLayout} from '../../../Layout.js';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        localStorage.setItem('jwtToken', result.data.token);
        localStorage.setItem('uid', result.data.uid)
        this.setState({ message: '' });
        this.props.history.push('/agents')
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not found.' });
        }
      });
  }

  render() {

    const { username, password, message } = this.state;

    return (
       <AuthLayout type="auth">
          <div className="login-container text-center">
             <form className="form-signin" onSubmit={this.onSubmit}>
              {message !== '' &&
              <div className="alert alert-warning alert-dismissible" role="alert">
                 { message }
              </div>
              }
              <p className="h2">Raven Signs</p>
              <img src="images/logo.png" className="mb-4" alt="Raven Signs" />
              <p className="h1 mb-3 font-weight-normal">Please sign in</p>
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
              <div className="checkbox mb-3">
             <label>
                <input type="checkbox" value="remember-me" /> Remember me
             </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
          <p>
            Not a member? <Link to="/register"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Register here</Link>
          </p>
          <p className="mt-5 mb-3 text-muted">&copy; 2018-2019</p>
        </form>
      </div>
      </AuthLayout>
    );
  }
}

export default Login;
