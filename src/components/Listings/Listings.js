import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Listing.scss';
import Layout from '../../Layout';
import ListingTemplate from './ListingTemplate';

// Class App component
class Listings extends Component {
    constructor( props ) {
        super( props );
    }

    render() {

      const posts = [
        {id: 1, title: 'Card Title', content: 'The quick brown fox...', button: 'More', image: 'images/Schweizer-Flagge.png'},
        {id: 2, title: 'Card Title', content: 'Some quick example text to build on the card title and make up the bulk of the cards content.', button: 'button-text', image: 'images/Schweizer-Flagge.png' },
        {id: 3, title: 'Card Title', content: 'The quick brown fox...', button: 'More', image: 'images/Schweizer-Flagge.png'}
      ];

      return(
         <Layout>
           {posts.map((post) =>
             <div key={post.id} className="card mr-md-3" style={{ width: `18rem`}}>
                { post.image != null &&
                    <img className="card-img-top" src={post.image} alt="Card image cap"/>
                }
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <a href="#" className="btn btn-primary">{post.button}</a>
                </div>
              </div>
            )}
          </Layout>
        )
    }
}
export default Listings;
