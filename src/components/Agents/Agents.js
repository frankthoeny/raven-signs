import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios'
import {AdminLayout} from '../../Layout'
import AgentModals from './AgentModals'

class Agents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      agents: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/agent')
      .then(res => {
        this.setState({ agents: res.data });
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/");
        }
      });
  }

  delete = (id) => {
    if (window.confirm("Are you sure about deleting this record?")) {
      axios.delete('/api/agent/'+id)
      .then((result) => {
        window.location.reload()
      });
    }
  }

  render() {
    return (
      <AdminLayout type="agent">
      <div className="container-fluid">
          <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Company</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {this.state.agents.map((agent) =>
                  <tr key={agent._id}>
                    <td>{agent.fullname}</td>
                    <td>{agent.company}</td>
                    <td>
                       <AgentModals modalType="edit"
                          id={agent._id} title={agent.company} />
                       <button onClick={this.delete.bind(this, agent._id)}
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

export default Agents;
