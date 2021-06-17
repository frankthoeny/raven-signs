import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Layout from '../../Layout';

class Orders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/order')
      .then(res => {
        this.setState({ orders: res.data });
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  render() {
    return (
      <Layout type="order">
      <div className="container-fluid">
          <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Agents</th>
                  <th>Listing Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip Code</th>
                  <th>Cross Street</th>
                  <th>Map Code</th>
                </tr>
              </thead>
              <tbody>
                {this.state.orders.map((order) =>
                  <tr key={order._id}>
                    <td>{order.agents}</td>
                    <td><Link to={`/order/show/${order._id}`}>{order.listing_address}</Link></td>
                    <td>{order.author}</td>
                    <td>{order.city}</td>
                    <td>{order.state}</td>
                    <td>{order.zipcode}</td>
                    <td>{order.cross_street}</td>
                    <td>{order.map_code}</td>
                  </tr>
                )}
              </tbody>
            </table>
        </div>
     </Layout>
    );
  }
}

export default Orders;
