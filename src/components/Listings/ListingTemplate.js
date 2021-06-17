import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const ListingTemplate= ({card__title, card__text, card__button, card__image}) => (
          <div className="card mr-md-3" style={{ width: `18rem`}}>
             { card__image!=null ? (
                 <img className="card-img-top" src={card__image} alt="Card image cap"/>
               ):(
                  <p>NO IMAGE</p>
               )
           }
             <div className="card-body">
                 <h5 className="card-title">{card__title}</h5>
                 <p className="card-text">{card__text}</p>
                 <a href="#" className="btn btn-primary">{card__button}</a>
             </div>
           </div>
        )
export default ListingTemplate;
