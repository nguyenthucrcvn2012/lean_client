import React from 'react';
import { Checkbox } from '@mui/material';
import './CheckboxCustom.scss';

const CheckboxCustom = ({label, ...props}) => {
  return (
    <>
      <Checkbox
        {...props}
        className="checkbox-custom"
      />
    </>
  )
}

export default CheckboxCustom;