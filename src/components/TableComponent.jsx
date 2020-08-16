import React from 'react';
import { Table, Typography } from 'antd';

const TableComponent = ({ title, para, data, columns }) => {
  const { Paragraph, Title } = Typography;
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Paragraph strong>{para}</Paragraph>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        footer={() =>
          '*The list is indicative and penalties are subject to periodic change.'
        }
      />
    </React.Fragment>
  );
};

export default TableComponent;
