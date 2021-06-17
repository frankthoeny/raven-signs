import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios'
import {AdminLayout} from '../../Layout'
import ClientModals from './ClientModals'

class Clients extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clients: [],
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/client')
      .then(res => {
        this.setState({ clients: res.data });
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/");
        }
      });
  }

  delete = (id) => {
    if (window.confirm("Are you sure about deleting this record?")) {
      axios.delete('/api/client/'+id)
      .then((result) => {
        window.location.reload()
      });
    }
  }

  render() {
    return (
      <AdminLayout type="client">
      <div className="container-fluid">
          <table className="table table-stripe table-hover">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Contact Name</th>
                  <th>Telephone Number</th>
                  <th>Email Address</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {this.state.clients.map((client) =>
                  <tr key={client._id}>
                    <td>
                       <ClientModals modalType="show"
                          id={client._id} title={client.company} />
                    </td>
                    <td>{client.contactname}</td>
                    <td>{client.phone}</td>
                    <td>{client.email}</td>
                    <td>
                       <ClientModals modalType="edit"
                          id={client._id} title={client.company} />
                       <button onClick={this.delete.bind(this, client._id)}
                        className="btn btn-sm btn-danger mr-4">Delete</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
        </div>
     </AdminLayout>
    );
  }
}

export default Clients;
