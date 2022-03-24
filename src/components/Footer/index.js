import React from 'react';
import MDBox from 'components/MD/MDBox';
import { Typography } from '@mui/material';
import moment from 'moment';

const Footer = () => {
  return (
    <MDBox
      className="footer"
      sx={{
        backgroundColor: 'gwPrimary.main',
        width: '100%',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
      }}
    >
      <Typography padding="0 10px" color="#fff" fontSize="0.8rem">
        © 2015-{moment().format('YYYY')} <a style={{ color: '#9EFF00'}}>Greenwich Inc.</a> All Rights Reserved
      </Typography>
    </MDBox>
  );
};

export default Footer;
