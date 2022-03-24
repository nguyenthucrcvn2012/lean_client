import React from 'react';
import { Radio } from '@mui/material';
import './RadioCustom.scss';

const RadioCustom = ({label, ...props}) => {
  return (
    <>
      <Radio
        {...props}
        className="radio-custom"
      />
      {label && <span className="radio-label-custom">{label}</span>}
    </>
  )
}

export default RadioCustom;