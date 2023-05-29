import React from 'react';
import Nav from '../components/Nav.jsx';
import logo from '../../logo.svg'
import Search from '../components/Search.jsx';
import Slider from '../components/Slider.jsx';
import sliders from '../API/sliders';

function Home(props) {
  return (
    <div>
      <Nav items={[
        { link: '/', text: 'Home' }, 
        { link: '/', text: 'Silder' }, 
        { link: '/', text: 'Products' }, 
        { link: '/', text: 'Catgories' }, 
        { link: '/', text: 'Products' }, 
        { link: '/', text: 'Recommendations' }, 
        { link: '/', text: 'Locations' }, 
        { link: '/', text: 'About' }, 
        { link: '/', text: 'Support' }]}
      >
        <div className='nav-logo-container'>
          <img src={logo} className='nav-logo' />
        </div>
        <Search placeholder="Search For Products" />
      </Nav>
      <Slider img={sliders[0].img} />
    </div>
  );
}

export default Home;