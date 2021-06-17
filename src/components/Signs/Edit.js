import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Layout from '../../Layout';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sign: {}
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/sign/'+this.props.match.params.id)
      .then(res => {
        this.setState({ sign: res.data });
      });
  }


  onCancelEdit = (e) => {
    e.preventDefault();
    this.props.history.push("/signs");
  }

  onChange = (e) => {
    const state = this.state.book
    state[e.target.name] = e.target.value;
    this.setState({sign:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, description, published_date, publisher } = this.state.sign;

    axios.put('/api/sign/'+this.props.match.params.id, { isbn, title, author, description, published_date, publisher })
      .then((result) => {
        this.props.history.push("/signs/"+this.props.match.params.id)
      });
  }



  render() {
    return (
      <Layout type="sign">
        <div className="container-fluid">
         <p className="h3">EDIT SIGN</p>
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="isbn">ISBN:</label>
                <input type="text" className="form-control" name="isbn" value={this.state.sign.isbn} onChange={this.onChange} placeholder="ISBN" />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" name="title" value={this.state.sign.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" className="form-control" name="author" value={this.state.sign.author} onChange={this.onChange} placeholder="Author" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" className="form-control" name="description" value={this.state.sign.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div className="form-group">
                <label htmlFor="published_date">Published Date:</label>
                <input type="text" className="form-control" name="published_date" value={this.state.sign.published_date} onChange={this.onChange} placeholder="Published Date" />
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Publisher:</label>
                <input type="text" className="form-control" name="publisher" value={this.state.sign.publisher} onChange={this.onChange} placeholder="Publisher" />
              </div>
              <button type="submit" className="btn btn-primary mr-4">Submit</button>
              <button type="button" className="btn btn-secondary" onClick={this.onCancelEdit}>Cancel</button>
            </form>
          </div>
        </Layout>
    );
  }
}

export default Edit;
