import React from 'react';
import { styled } from '@mui/system';

const StyledImageButton = styled('button')({
  background: 'transparent',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '40px',
  '&:hover': {
    cursor: 'pointer',
    background: 'linear-gradient(to bottom, rgba(141, 198, 238, 1) 0%, 7.360226660966873%, rgba(176, 220, 247, 1) 14.720453321933746%, 57.36022666096687%, rgba(103, 181, 246, 1) 100%)',
  }
});

const ImageButton = ({ children, image, style, ...others }) => {
  return (
    <StyledImageButton {...others} style={style}>
      {image && <img src={image} alt="" />}
      {children}
    </StyledImageButton>
  );
}

export default ImageButton;