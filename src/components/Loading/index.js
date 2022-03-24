import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'absolute',
        background: '#000',
        opacity: '0.2'
      }} />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
      }}>
        <CircularProgress size={50} />
      </Box>
    </>
  );
}

export default Loading;