import React, { useState, useEffect } from 'react';
import '../style/Nav.scss'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import useMaxWidth from '../hooks/useMaxWidth.jsx';

function Nav(props) {
  //handle show and hide side nav
  const [showSideNav, setShowSideNav] = useState('none');
  //handle the side nav items
  const [hiddenItems, setHiddenItems] = useState([]);
  // const maxWidth = useMaxWidth('.nav-items-container'); // custom hook to get max width
  // console.log(maxWidth);

  function handleShowSideNav(ev) {
    setShowSideNav("block")
  }
  function handleHideSideNav(ev) {
    if (ev.target.className === 'side-nav-wrapper') {
      setShowSideNav("none")
    }
  }

  useEffect(() => {
    function makeNavResponsive() {
      const mainNav = document.querySelector('.nav-items-container');
      const w = mainNav.offsetWidth
      const winW = window.innerWidth
      const containerW =  document.querySelector('nav').offsetWidth;
      const avrageWidth = containerW - w
      console.log(avrageWidth, w - avrageWidth, 'avrageWidth avrageWidth');

      console.log(w, winW, containerW);
      const navItems = Array.from(mainNav.querySelectorAll('div'));
      const hiddenItems = [];

      // console.log(mainNav, navItems);

      // navItems.forEach(item => {
      //   // console.log(item.offsetLeft + item.offsetWidth, maxWidth);

      //   if (item.offsetLeft + item.offsetWidth > w) {
      //     hiddenItems.push(item);
      //   } else {
      //     hiddenItems.shift();
      //   }
      // });
      if(w > winW) {
        // hiddenItems.push(item);
        console.log('resolve that');
      }
      console.log(hiddenItems);
      // setHiddenItems(hiddenItems);
    }

    makeNavResponsive();

    window.addEventListener('resize', makeNavResponsive);

    return () => {
      window.removeEventListener('resize', makeNavResponsive);
    };
  }, []);

  // useEffect(() => {
  //   function makeNavResponsive() {
  //     const mainNav = document.querySelector('.nav-items-container');
  //     const sideNav = document.querySelector('.side-nav');

  //     const navItems = Array.from(mainNav.querySelectorAll('div'));
  //     const hiddenItems = [];

  //     if(mainNav.offsetWidth < window.innerWidth) {
  //       console.log('try now!');
  //     }
  //     // navItems.forEach(item => {
  //     //   if (item.offsetLeft + item.offsetWidth > maxWidth) {
  //     //     hiddenItems.push(item);
  //     //   }
  //     // });

  //     // hiddenItems.forEach(item => {
  //     //   mainNav.removeChild(item);
  //     //   sideNav.appendChild(item);
  //     // });
  //   }

  //   makeNavResponsive();
  //   window.addEventListener('resize', makeNavResponsive);

  //   return () => {
  //     window.removeEventListener('resize', makeNavResponsive);
  //   };
  // }, []);


  return (
    <nav>
      {props.children}
      <div className='nav-items-container'>
        {props.items && props.items.map((e, i) => (
          <div key={i} className='nav-items-wrapper'>
            {/* <Link to={e.link} className='nav-items'>{e.text}</Link> */}
            <a href={e.link} className='nav-items'>{e.text}</a>
          </div>
        ))}
        <div className='nav-bars' onClick={handleShowSideNav}>
          <FaBars />
        </div>
      </div>
      <div className='side-nav-wrapper' style={{ display: showSideNav }} onClick={handleHideSideNav}>
        <div className='side-nav'>
          {hiddenItems.length ? hiddenItems.map((e, i) => (
            <div key={i} className='side-nav-items-wrapper'>
              {/* <Link to={e.link} className='nav-items'>{e.text}</Link> */}
              <a href={e.link} className='side-nav-items'>{e.text}</a>
            </div>
          )) : null}
        </div>
      </div>
    </nav>
  );
}

export default Nav;