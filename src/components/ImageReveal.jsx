import React from 'react';
import imgReveal from '../assets/img-reveal.jpg';

const ImageReveal = () => {
  return (
    <React.Fragment>
      <div className='img-container'>
        <img src={imgReveal} alt='banner' />
      </div>
    </React.Fragment>
  );
};

export default ImageReveal;
