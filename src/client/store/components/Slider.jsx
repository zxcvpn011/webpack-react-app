import React from 'react';
import '../style/Sliders.scss';

function Slider(props) {
  console.log("updated....")
  return (
    <div id='sliders-container'>
      <div id='sliders-container-body'>
        <div className='sliders' style={{
          background: `url('${props.img}')`.replace(/.x27./, '')//fix obfuscator conflict
        }}>
          <div className='sliders-item-header'>
          header.....
          </div>
          <div className='sliders-item-body'>
          body
          </div>
          <div className='sliders-item-footer'>
          footer
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Slider);