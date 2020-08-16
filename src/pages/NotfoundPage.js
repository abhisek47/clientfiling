import React, { Component } from 'react';
import { Result, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';

export class NotfoundPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout className='not-found'>
          <div className='container'>
            <Result
              status='404'
              title='404'
              subTitle='Sorry, the page you visited does not exist.'
              extra={
                <Link to='/'>
                  <Button type='primary'>Back Home</Button>
                </Link>
              }
            />
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default NotfoundPage;
