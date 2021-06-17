import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

class EditClient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      client: {
          contactname: '',
          phone: '',
          email: '',
          company: '',
          address: '',
          city: '',
          state: '',
          zipcode: ''
      }
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/client/'+this.props.id)
      .then(res => {
        this.setState({ client: res.data });
      });
  }


  onCancelEdit = (e) => {
    e.preventDefault();
    window.location.reload();
  }

  onChange = (e) => {
    const state = this.state.client
    state[e.target.name] = e.target.value;
    this.setState({client:state});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { contactname, phone, email, company, address, city, state, zipcode } = this.state.client;

    axios.put('/api/client/'+this.props.id, { contactname, phone, email, company, address, city, state, zipcode })
      .then((result) => {
        window.location.reload()
      });
  }

  render() {
    return (
        <div className="container-fluid">
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="contactname">Contact Name:</label>
                <input type="text" className="form-control" name="contactname" value={this.state.client.contactname} onChange={this.onChange} placeholder="Contact Name" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Telephone Number:</label>
                <input type="tel" className="form-control" name="phone" value={this.state.client.phone} onChange={this.onChange} placeholder="Telephone Number" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" className="form-control" name="email" value={this.state.client.email} onChange={this.onChange} placeholder="Email Address" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name:</label>
                <input type="text" className="form-control" name="company" value={this.state.client.company} onChange={this.onChange} placeholder="Company Name" />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" className="form-control" name="address" value={this.state.client.address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" className="form-control" name="city" value={this.state.client.city} onChange={this.onChange} placeholder="City" />
              </div>
              <div className="form-group">
                <label htmlFor="state">State:</label>
                <input type="text" className="form-control" name="state" value={this.state.client.state} onChange={this.onChange} placeholder="State" />
              </div>
              <div className="form-group">
                <label htmlFor="zipcode">Zip Code:</label>
                <input type="text" className="form-control" name="zipcode" value={this.state.client.zipcode} onChange={this.onChange} placeholder="Zip Code" />
              </div>
              <button type="submit" className="btn btn-lg btn-primary btn-block">Save Changes</button>
            </form>
          </div>
    );
  }
}

export default EditClient;
