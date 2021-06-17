import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink as Link } from 'react-router-dom';

const Hero = ({bgHero}) => {
  return (
     <div className="jumbotron" style={bgHero}>
       <h1 className="h3 display-6 font-weight-bold">Raven Signs</h1>
       <p className="col-md-7 font-weight-normal">Our unique, efficient online system will save you time.
       And we'll provide you with the superior service
       you provide your own clients.</p>
     </div>
   )
}
export default Hero
