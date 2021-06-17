import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink as Link } from 'react-router-dom';
const RegisterBox = (props) => {
  return (
     <div className="card mr-md-4 cards__ipad-pro-portrait" style={{width:`23rem`}}>
       <div className="card-body">
          <p className="h3">Why wait? Register Now!</p>
          <hr className="my-4" />
          <p className="lead">Look up, locate your signs fast!</p>
         <div className="container">
           {localStorage.getItem('jwtToken') ? (
             <Link className="btn btn-primary btn-lg" to="/agents">Go To Dashboard</Link>
           ):(
            <>
              <Link className="btn btn-primary btn-lg mr-4" to="/register">Register</Link>
              <Link className="btn btn-primary btn-lg" to="/login">Login</Link>
            </>
           )}

         </div>
        </div>
     </div>
   )
}
export default RegisterBox
