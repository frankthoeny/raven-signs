import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Layout from '../../Layout';

class Books extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  render() {
    return (
      <Layout type="book">
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
                {this.state.books.map((book) =>
                  <tr key={book._id}>
                    <td>{book.isbn}</td>
                    <td><Link to={`/book/show/${book._id}`}>{book.title}</Link></td>
                    <td>{book.author}</td>
                    <td>{book.description}</td>
                    <td>{book.published_date}</td>
                    <td>{book.publisher}</td>
                    <td>{book.updated_date}</td>
                  </tr>
                )}
              </tbody>
            </table>
        </div>
     </Layout>
    );
  }
}

export default Books;
