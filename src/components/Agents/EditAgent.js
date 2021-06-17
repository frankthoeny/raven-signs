import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

class EditAgent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      agent: {
        fullname: '',
        company: '',
      }
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/agent/'+this.props.id)
      .then(res => {
        this.setState({ agent: res.data });
        console.log(this.state.agent);
      });
  }


  onCancelEdit = (e) => {
    e.preventDefault();
    window.location.reload()
  }

  onChange = (e) => {
    const state = this.state.agent
    state[e.target.name] = e.target.value;
    this.setState({agent:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { fullname, company } = this.state.agent;

    axios.put('/api/agent/'+this.props.id, { fullname, company })
      .then((result) => {
        window.location.reload()
      });
  }



  render() {
    return (
        <div className="container-fluid">
          <form onSubmit={this.onSubmit}>

              <div className="form-group">
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" className="form-control" name="fullname" value={this.state.agent.fullname} onChange={this.onChange} placeholder="Full Name" />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company:</label>
                <input type="text" className="form-control" name="company" value={this.state.agent.company} onChange={this.onChange} placeholder="Company" />
              </div>

              <button type="submit" className="btn btn-lg btn-primary btn-block">Save Changes</button>

            </form>
          </div>
    );
  }
}

export default EditAgent;
