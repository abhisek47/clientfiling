import React, { Component } from 'react';
import { Rate } from 'antd';

class RatingComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='rating'>
          <Rate disabled defaultValue={4} />
        </div>
      </React.Fragment>
    );
  }
}

export default RatingComponent;
