import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Layout from '../../Layout';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sign: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/sign/' + this.props.match.params.id)
      .then(res => {
        this.setState({ sign: res.data });
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  delete = (id) => {
    if (window.confirm("Are you sure about deleting this record?")) {
      axios.delete('/api/sign/'+id)
      .then((result) => {
        this.props.history.push("/signs")
      });
    }
  }

  onCancelEdit = (e) => {
    e.preventDefault();
    this.props.history.push("/signs");
  }

  //let d = this.state.sign.published_date.slice(0, 10).split('-')

  render() {
    return (
      <Layout type="sign">
         <div className="container" key={this.props.match.params.id}>

           <div className="d-flex flex-row">
              <div className="align-self-start p-2 font-weight-bold">Title:</div>
              <div className="p-2">{this.state.sign.title}</div>
           </div>

            <div className="d-flex flex-row">
              <div className="align-self-start p-2 font-weight-bold">ISBN:</div>
              <div className="p-2">{this.state.sign.isbn}</div>
            </div>

            <div className="d-flex flex-row">
               <div className="align-self-start p-2 font-weight-bold">Author:</div>
               <div className="p-2">{this.state.sign.author}</div>
            </div>

            <div className="d-flex flex-row">
              <div className="align-self-start p-2 font-weight-bold">Description:</div>
              <div className="p-2">{this.state.sign.description}</div>
            </div>

             <div className="d-flex flex-row">
              <div className="align-self-start p-2 font-weight-bold">Publish Date:</div>
              <div className="p-2">{this.state.sign.published_date}</div>
             </div>

             <div className="d-flex flex-row">
               <div className="align-self-start p-2 font-weight-bold">Publisher:</div>
               <div className="p-2">{this.state.sign.publisher}</div>
             </div>
          </div>

          <div className="container">
             <Link to={`/edit/${this.state.sign._id}`} className="btn btn-primary mr-4">Edit</Link>
             <button type="button" className="btn btn-secondary mr-4" onClick={this.onCancelEdit}>Cancel</button>
             <button onClick={this.delete.bind(this, this.state.sign._id)} className="btn btn-danger">Delete</button>
          </div>

      </Layout>
    );
  }
}

export default Show;
