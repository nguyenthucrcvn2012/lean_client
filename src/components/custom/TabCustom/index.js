import React from 'react';
import { Box } from '@mui/material';
import './TabCustom.scss';

const TabCustom = ({children, ...others}) => {
  return (
    <>
      <Box className="tab-custom" {...others}>
        {children}
      </Box>
    </>   
  )
}


export default TabCustom;