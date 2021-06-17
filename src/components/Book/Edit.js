import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Layout from '../../Layout';

class EditBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book/'+this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      });
  }


  onCancelEdit = (e) => {
    e.preventDefault();
    this.props.history.push("/books");
  }

  onChange = (e) => {
    const state = this.state.book
    state[e.target.name] = e.target.value;
    this.setState({book:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, description, published_date, publisher } = this.state.book;

    axios.put('/api/book/'+this.props.match.params.id, { isbn, title, author, description, published_date, publisher })
      .then((result) => {
        this.props.history.push("/book/catalog/"+this.props.match.params.id)
      });
  }



  render() {
    return (
      <Layout type="book">
        <div className="container-fluid">
         <p className="h3">EDIT BOOK</p>
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="isbn">ISBN:</label>
                <input type="text" className="form-control" name="isbn" value={this.state.book.isbn} onChange={this.onChange} placeholder="ISBN" />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" name="title" value={this.state.book.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" className="form-control" name="author" value={this.state.book.author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control" name="description" value={this.state.book.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div className="form-group">
                <label htmlFor="published_date">Published Date:</label>
                <input type="date" className="form-control" name="published_date" value={this.state.book.published_date} onChange={this.onChange} placeholder="Published Date" />
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Publisher:</label>
                <input type="text" className="form-control" name="publisher" value={this.state.book.publisher} onChange={this.onChange} placeholder="Publisher" />
              </div>
              <button type="submit" className="btn btn-primary mr-4">Submit</button>
              <button type="button" className="btn btn-secondary" onClick={this.onCancelEdit}>Cancel</button>
            </form>
          </div>
        </Layout>
    );
  }
}

export default EditBook;
