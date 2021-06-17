import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Layout from '../../Layout';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      isbn: '',
      title: '',
      author: '',
      description: '',
      published_date: '',
      publisher: ''
    };
  }

 componentDidMount(){
   axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
 }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { isbn, title, author, description, published_date, publisher } = this.state;

    axios.post('/api/sign', { isbn, title, author, description, published_date, publisher })
      .then((result) => {
        this.props.history.push("/signs");
      });
  }

  render() {
    const { isbn, title, author, description, published_date, publisher } = this.state;
    return (
      <Layout type="sign">
         <div className="container">
            <p className="h4">ADD BOOK</p>
            <form onSubmit={this.onSubmit}>
               <div className="form-group">
                 <label htmlFor="isbn">ISBN:</label>
                 <input type="text" className="form-control" name="isbn" value={isbn} onChange={this.onChange} placeholder="ISBN" />
               </div>
               <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea className="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3" value={description}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="published_date">Published Date:</label>
                <input type="number" className="form-control" name="published_date" value={published_date} onChange={this.onChange} placeholder="Published Date" />
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Publisher:</label>
                <input type="text" className="form-control" name="publisher" value={publisher} onChange={this.onChange} placeholder="Publisher" />
              </div>
              <button type="submit" className="btn btn-lg btn-primary btn-block">Publish</button>
            </form>
         </div>
      </Layout>
    );
  }
}

export default Create;
