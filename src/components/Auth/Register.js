import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import {AuthLayout} from '../../Layout';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onChange(event) {
    const state = this.state
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  onSave(event) {
    event.preventDefault();

    const { username, password } = this.state;

    axios.post('/api/auth/register', { username, password })
      .then((result) => {
        // handle success
        console.log(result.data.msg);
        this.setState({ message: result.data.msg});
        this.props.history.push("/login");
      });

  }

  render() {
    const { username, password, message } = this.state;
    return (
      <AuthLayout type="auth">
        <div className="login-container text-center">
           <form className="form-signin" onSubmit={this.onSave}>
              {message !== '' &&
               <div className="alert alert-warning alert-dismissible">
                { message }
              </div>
              }
              <p className="h2">Raven Signs</p>
              <img src="images/logo.png" className="mb-4" alt="Raven Signs" />
              <h2 className="form-signin-heading">Register</h2>
              <label htmlFor="inputEmail" className="sr-only">(username)</label>
              <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={this.onChange} required/>
              <label htmlFor="inputPassword" className="sr-only">Password</label>
             <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
             <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
          <p>
            Already a member? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
    );
  }
}

export default Register;
