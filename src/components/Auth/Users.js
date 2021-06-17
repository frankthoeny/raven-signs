import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import axios from 'axios'

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/user')
      .then(res => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/");
        }
     });
  }


  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">User Profiles</h3>
          </div>
          <div className="panel-body">
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Address (username)</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
