import React from 'react';
import { styled } from '@mui/system';
import searchImg from 'assets/images/buttons/icon_search.png';

const StyledInput = styled('input')({
  height: '25px',
  width: '250px',
  '&:hover, &:focus, &:active': {
    border: '2px solid #6BA3D6',
    outline: 'none'
  }
});

const StyledSearchButton = styled('button')({
  width: '35px',
  background: 'transparent',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    background: '#CACACA',
    borderRadius: '2px'
  }
});

const InputSearch = () => {
  return (
    <>
      <StyledInput />
      <StyledSearchButton>
        <img src={searchImg} alt="" />
      </StyledSearchButton>
    </>
  )
}

export default InputSearch;