import React from 'react';
import MDBox from 'components/MD/MDBox';

const PageLayout = ({ background, children }) => {
  return (
    <MDBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: 'hidden' }}
    >
      {children}
    </MDBox>
  );
};

export default PageLayout;
