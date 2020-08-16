import React from 'react';

const AnchorComponent = () => {
  return (
    <React.Fragment>
      <Anchor className='gst-tab-link'>
        <Link href='#gst-reg' title='GST Registration' />
        <Link href='#gst-pricing' title='Pricing' />
        <Link href='#gst-cases' title='Eligibility' />
        <Link href='#gst-docs' title='Documents required' />
        <Link href='#gst-faq' title='FAQ' />
      </Anchor>
    </React.Fragment>
  );
};

export default AnchorComponent;
