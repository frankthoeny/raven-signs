import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

class ShowBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      client: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/client/'+this.props.id)
      .then(res => {
        this.setState({ client: res.data });
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  render() {
    return (
       < >
        <div className="container" key={this.props.id}>
           <div className="d-flex flex-row">
              <div className="align-self-start p-2 font-weight-bold">Company:</div>
              <div className="p-2">{this.state.client.company}</div>
           </div>

           <div className="d-flex flex-row">
             <div className="align-self-start p-2 font-weight-bold">Address:</div>
             <div className="p-2">{this.state.client.address}</div>
           </div>

          <div className="d-flex flex-row">
           <div className="align-self-start p-2 font-weight-bold">City:</div>
           <div className="p-2">{this.state.client.city}</div>
          </div>

          <div className="d-flex flex-row">
            <div className="align-self-start p-2 font-weight-bold">State:</div>
            <div className="p-2">{this.state.client.state}</div>
          </div>

          <div className="d-flex flex-row">
            <div className="align-self-start p-2 font-weight-bold">Zip Code:</div>
            <div className="p-2">{this.state.client.zipcode}</div>
          </div>

           <div className="d-flex flex-row">
             <div className="align-self-start p-2 font-weight-bold">Contact Name:</div>
             <div className="p-2">{this.state.client.contactname}</div>
           </div>

           <div className="d-flex flex-row">
              <div className="align-self-start p-2 font-weight-bold">Phone:</div>
              <div className="p-2">{this.state.client.phone}</div>
           </div>

            <div className="d-flex flex-row">
              <div className="align-self-start p-2 font-weight-bold">Email:</div>
              <div className="p-2">{this.state.client.email}</div>
            </div>
          </div>
      < />
    );
  }
}

export default ShowBook;
