import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

class ShowAgent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      agent: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/agent/' + this.props.id)
      .then(res => {
        this.setState({ agent: res.data });
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  delete = (id) => {
    if (window.confirm("Are you sure about deleting this Agent?")) {
      axios.delete('/api/agent/'+id)
      .then((result) => {
        this.props.history.push("/agents")
      });
    }
  }

  onCancelEdit = (e) => {
    e.preventDefault();
    this.props.history.push("/agents");
  }

  render() {
    return (
         <div className="container" key={this.props.id}>

           <div className="d-flex flex-row">
              <div className="align-self-start p-2 font-weight-bold">Full Name:</div>
              <div className="p-2">{this.state.agent.fullname}</div>
           </div>

            <div className="d-flex flex-row">
              <div className="align-self-start p-2 font-weight-bold">Company:</div>
              <div className="p-2">{this.state.agent.company}</div>
            </div>

        </div>
    );
  }
}

export default ShowAgent;
