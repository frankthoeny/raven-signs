import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';
import axios from 'axios';
import './Sidebar.scss';
import Iframe from 'react-iframe';

// news and events component
class NewsEvents extends Component {

  constructor( props ) {
      super( props );
      this.state = {
        books: []
      };
  }

  componentDidMount() {
    axios.get('/api/book/front/page')
      .then(res => {
        this.setState({ books: res.data });
      });
  }

render() {
    return(
      <div className="content-border-box-outer">
          <div className="content-border-box">
             <h2 className="content-border-box-header">News & Events</h2>

               {this.state.books.map((book) =>
                 <aside className="recommendations" key={book._id}>
                   <p>{book.isbn}</p>
                   <p>{book.title}</p>
                   <p>{book.author}</p>
                   <p>{book.description}</p>
                   <p>{book.published_date}</p>
                   <p>{book.publisher}</p>
                   <p>{book.updated_date}</p>
                 </aside>
               )}

             <aside className="recommendations">
                Schweizer recommendation about the products.
             </aside>
             <aside className="recommendations">
                Client recommendation about the products.
             </aside>
             <aside className="summary">
               <Link to="/about" activeClassName="active">
                  Summary of independent journalist evaluation of the product.
               </Link>
             </aside>
             <aside>
                For Pricing and Special Offers, please click on the location link below.
             </aside>
             <aside className="other">
                 Some other information about the products.
             </aside>
          </div>
      </div>
     );
  }
}


// video of instructions route component
const VideoSidebar = ( props ) => {
   return (
     <div className="content-border-box-outer">
        <div className="content-border-box">
          <h2 className="content-border-box-header">Video</h2>
          <div className="container ipad-pro embed-responsive embed-responsive-16by9">
             <Iframe url="https://www.youtube.com/embed/4uccnYJri14" className="embed-responsive-item" />
          </div>
        </div>
    </div>
   );
}

export { NewsEvents, VideoSidebar };
