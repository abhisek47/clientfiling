import React from 'react';
import { Rate } from 'antd';

const RatingComponent = () => {
  return (
    <React.Fragment>
      <div className='rating'>
        <Rate disabled defaultValue={4} />
      </div>
    </React.Fragment>
  );
};

export default RatingComponent;
