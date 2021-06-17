import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Layout from '../../Layout';

class ShowBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      book: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book/' + this.props.match.params.id)
      .then(res => {
        this.setState({ book: res.data });
        console.log(this.state.book);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  delete = (id) => {
    if (window.confirm("Are you sure about deleting this record?")) {
      axios.delete('/api/book/'+id)
      .then((result) => {
        this.props.history.push("/books")
      });
    }
  }

  onCancelEdit = (e) => {
    e.preventDefault();
    this.props.history.push("/books");
  }
  //let d = this.state.book.published_date.slice(0, 10).split('-')
  render() {
    return (
      <Layout type="book">
         <div className="container" key={this.props.match.params.id}>

           <div className="d-flex flex-row">
              <div className="align-self-start p-2 font-weight-bold">Title:</div>
              <div className="p-2">{this.state.book.title}</div>
           </div>

            <div className="d-flex flex-row">
              <div className="align-self-start p-2 font-weight-bold">ISBN:</div>
              <div className="p-2">{this.state.book.isbn}</div>
            </div>

            <div className="d-flex flex-row">
               <div className="align-self-start p-2 font-weight-bold">Author:</div>
               <div className="p-2">{this.state.book.author}</div>
            </div>

            <div className="d-flex flex-row">
              <div className="align-self-start p-2 font-weight-bold">Description:</div>
              <div className="p-2">{this.state.book.description}</div>
            </div>

             <div className="d-flex flex-row">
              <div className="align-self-start p-2 font-weight-bold">Publish Date:</div>
              <div className="p-2">{this.state.book.published_date}</div>
             </div>

             <div className="d-flex flex-row">
               <div className="align-self-start p-2 font-weight-bold">Publisher:</div>
               <div className="p-2">{this.state.book.publisher}</div>
             </div>
          </div>

          <div className="container">
             <Link to={`/book/edit/${this.state.book._id}`} className="btn btn-primary mr-4">Edit</Link>
             <button type="button" className="btn btn-secondary mr-4" onClick={this.onCancelEdit}>Cancel</button>
             <button onClick={this.delete.bind(this, this.state.book._id)} className="btn btn-danger">Delete</button>
          </div>

      </Layout>
    );
  }
}

export default ShowBook;
