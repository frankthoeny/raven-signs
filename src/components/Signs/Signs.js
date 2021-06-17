import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Layout from '../../Layout';

class Signs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signs: []
    };
  }
  componentWillMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
  }
  componentDidMount() {
    axios.get('/api/sign')
      .then(res => {
        this.setState({ signs: res.data });
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  render() {
    return (
      <Layout type="sign">
      <div className="container-fluid">
          <table className="table table-stripe">
              <thead>
                <tr>
                  <th>isbn</th>
                  <th>title</th>
                  <th>author</th>
                  <th>description</th>
                  <th>published_date</th>
                  <th>publisher</th>
                  <th>updated_date</th>
                </tr>
              </thead>
              <tbody>
                {this.state.signs.map((sign) =>
                  <tr key={sign._id}>
                    <td>{sign.isbn}</td>
                    <td><Link to={`/book/show/${sign._id}`}>{sign.title}</Link></td>
                    <td>{sign.author}</td>
                    <td>{sign.description}</td>
                    <td>{sign.published_date}</td>
                    <td>{sign.publisher}</td>
                    <td>{sign.updated_date}</td>
                  </tr>
                )}
              </tbody>
            </table>
        </div>

     </Layout>
    );
  }
}

export default Signs;
