import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

// Admin sidebar component
export const AdminSidebar = ( props ) => {
   return (
     <div>
        <div className="shadow-sm p-3 m-4 mb-5 bg-white rounded">
          <h5 className="text-nowrap">Admin Menu</h5>
          <ul className="nav flex-column">
             <li className="nav-item">
                <Link className="nav-link active" to="/agents">Agents</Link>
             </li>
             <li className="nav-item">
                <Link className="nav-link" to="/clients">Clients</Link>
             </li>
          </ul>
        </div>
    </div>
   );
}
