import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

class CreateClient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactname: '',
      phone: '',
      email: '',
      company: '',
      address: '',
      city: '',
      state: '',
      zipcode: ''
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
    const { contactname, phone, email, company, address, city, state, zipcode } = this.state;

    axios.post('/api/client', { contactname, phone, email, company, address, city, state, zipcode  })
      .then((result) => {
          window.location.reload();
      });
  }

  render() {
    const { contactname, phone, email, company, address, city, state, zipcode  } = this.state;
    return (
         <div className="container">
            <form onSubmit={this.onSubmit}>
               <div className="form-group">
                 <label htmlFor="contactname">Contact Name:</label>
                 <input type="text" className="form-control" name="contactname" value={contactname} onChange={this.onChange} placeholder="Contact Name" />
               </div>
               <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" className="form-control" name="phone" value={phone} onChange={this.onChange} placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" className="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email Address" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name:</label>
                <input type="text" className="form-control" name="company" value={company} onChange={this.onChange} placeholder="Company Name" />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" className="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" className="form-control" name="city" value={city} onChange={this.onChange} placeholder="City" />
              </div>
              <div className="form-group">
                <label htmlFor="state">State:</label>
                <input type="text" className="form-control" name="state" value={state} onChange={this.onChange} placeholder="State" />
              </div>
              <div className="form-group">
                <label htmlFor="zipcode">Zip Code:</label>
                <input type="text" className="form-control" name="zipcode" value={zipcode} onChange={this.onChange} placeholder="Zip Code" />
              </div>
              <button type="submit" className="btn btn-lg btn-primary btn-block">Publish</button>
            </form>
         </div>
    );
  }
}

export default CreateClient;
