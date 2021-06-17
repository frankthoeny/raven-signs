import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class HeaderLoginForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        message: ''
      }
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

      const { username, password, message } = this.state;

      axios.post('api/auth/login', { username, password, message })
        .then((result) => {
          localStorage.setItem('jwtToken', result.data.token);
          this.setState({ message: 'Login Successful.' });
          this.props.history.push('/');
        })
        .catch((error) => {
          if (error.response) {
            if(error.response.status === 401) {
              this.setState({ message: 'Login failed. Username or password not found.' });
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }        
        });
    }

   render() {
     const { username, password, message } = this.state;
     return (
       <form className="form-inline">
       {message !== '' &&
         <div className="alert alert-warning alert-dismissible">
           { message }
         </div>
       }
       <input type="text" name="username" label="username"
        placeholder="Username"
        className="form-control mr-sm-2"
        aria-label="Username"
        value={ username }
        onChange={ this.onChange }  />

      <input type="password" name="password" label="password"
       className="form-control mr-sm-2"
       placeholder="Password"
       value={ password }
       aria-label="Password"
       onChange={ this.onChange } />

       <button type="submit" className="btn btn-sm btn-outline-secondary"
        onClick={ this.onSave }> Login </button>
     </form>

      )
   }
}

export default HeaderLoginForm;
