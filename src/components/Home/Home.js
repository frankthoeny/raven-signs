import React from 'react';
import ReactDOM from 'react-dom';
import { NewsEvents, VideoSidebar } from '../Sidebar/Sidebar'
import './Home.scss'
import Layout from '../../Layout.js'
import Hero from './Hero'
import FourSteps from './FourSteps'
import RegisterBox from './RegisterBox'


// home route component
class Home extends React.Component {
  constructor( props ) {
      super( props );
  }
  render() {
    const bgHero={
      backgroundImage: `url("images/hero-1.png")`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      backgroundBlendMode: `difference`,
      color: `rgb(255, 255, 255)`,
      textShadow: `rgba(15, 15, 15, 0.9) 2px 1px`
    };
    return (
     <Layout>
      <section className="col-md-8">
         <Hero bgHero={bgHero} />
         <div className="container">
            <div className="row">
              <RegisterBox />
              <FourSteps />
            </div>
          </div>
      </section>

      <div className="sidebar col-md-4">
          <NewsEvents />
          <VideoSidebar />
      </div>
      </Layout>
    );
  }
}

export default Home;
