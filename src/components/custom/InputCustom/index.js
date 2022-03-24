import React from 'react';
import { TextField } from '@mui/material';
import './InputCustom.scss';

const InputCustom = (props) => {
  return (
    <TextField {...props} className="input-custom" />
  )
}

export default InputCustom;