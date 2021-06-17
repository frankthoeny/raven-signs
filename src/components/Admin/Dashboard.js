import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';

import Layout from "../../Layout.js";
const Dashboard = () => {

    return (
       <Layout type="no-wrap">
          <div className="login-container text-center">
            <Link to="/books">Books</Link>
          </div>
       </Layout>
    )

}

export default Dashboard;
