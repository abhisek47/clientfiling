import React from 'react';
import responsiveSlides from 'responsive-slides';
import bannerOne from '../assets/banner.jpg';
import bannerTwo from '../assets/banner2.jpg';
import bannerThree from '../assets/banner3.jpg';

const Slides = () => {
  return (
    <React.Fragment>
      <ul className='rslides'>
        <li>
          <div
            src={bannerOne}
            alt=''
            style={{
              backgroundImage: `url(${bannerOne})`,
              backgroundPosition: 'center top',
            }}
          />
        </li>
        <li>
          <div alt='' style={{ backgroundImage: `url(${bannerTwo})` }} />
        </li>
        <li>
          <div
            src={bannerThree}
            alt=''
            style={{
              backgroundImage: `url(${bannerThree})`,
              backgroundPosition: 'center bottom',
            }}
          />
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Slides;
