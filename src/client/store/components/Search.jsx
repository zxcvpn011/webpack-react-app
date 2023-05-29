import React from 'react';
import '../style/Search.scss';
import { FaSearch } from 'react-icons/fa';

function Search(props) {
  return (
    <div className='search-bar-container'>
      <input type='search' className='search-bar' placeholder={props.placeholder && props.placeholder } />
      <button className='search-bar-btn'>
        <FaSearch />
      </button>
    </div>
  );
}

export default React.memo(Search);