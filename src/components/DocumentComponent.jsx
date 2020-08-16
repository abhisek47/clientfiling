import React from 'react';
import { Timeline, Typography } from 'antd';

const DocumentComponent = ({ documents }) => {
  const { Paragraph, Title } = Typography;
  return (
    <React.Fragment>
      <Title>Documents required for gst registration</Title>
      <Paragraph strong>In below all the documents is required</Paragraph>
      <Timeline>
        {documents.map((cases) => (
          <Timeline.Item key={cases.id}>
            <Paragraph level={4}>{cases.case}</Paragraph>
          </Timeline.Item>
        ))}
      </Timeline>
    </React.Fragment>
  );
};

export default DocumentComponent;
