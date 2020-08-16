import React from 'react';
import { Typography, List } from 'antd';
import { Link } from 'react-router-dom';

const OtherServicesComponent = ({ services }) => {
  const { Text, Title } = Typography;
  return (
    <React.Fragment>
      <Title level={4}>Other services</Title>
      <div className='other-services'>
        <List>
          {services.map((others) => (
            <div key={others.id}>
              <Link to={others.link}>
                <List.Item>
                  <Text>{others.item}</Text>
                </List.Item>
              </Link>
            </div>
          ))}
        </List>
      </div>
    </React.Fragment>
  );
};

export default OtherServicesComponent;
