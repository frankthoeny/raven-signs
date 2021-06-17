import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

class CreateAgent extends Component {

  constructor() {
    super();
    this.state = {
      fullname: '',
      company: '',
    };
  }

 componentDidMount(){
   axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
 }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { fullname, company } = this.state;

    axios.post('/api/agent', { fullname, company })
      .then((result) => {
        window.location.reload()
      });
  }

  render() {
    const { fullname, company } = this.state;
    return (
         <div className="container-fluid">
            <p className="h4">Create Agent</p>
            <form onSubmit={this.onSubmit}>
               <div className="form-group">
                 <label htmlFor="fullname">Name:</label>
                 <input type="text" className="form-control" name="fullname" value={fullname} onChange={this.onChange} placeholder="Full Name" />
               </div>
              <div className="form-group">
                <label htmlFor="company">Company:</label>
                <input type="text" className="form-control" name="company" value={company} onChange={this.onChange} placeholder="Company" />
              </div>
              <button type="submit" className="btn btn-lg btn-primary btn-block">Publish</button>
            </form>
         </div>
    );
  }
}

export default CreateAgent;
