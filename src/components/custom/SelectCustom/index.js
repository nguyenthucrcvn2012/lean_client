import React from 'react';
import { Select } from '@mui/material';
import './SelectCustom.scss';

const SelectCustom = ({children, ...others}) => {
  return (
    <Select
      className="select-custom"
      MenuProps={{ className: 'option-select-custom' }}
      {...others}
    >
      {children}
    </Select>
  )
}

export default SelectCustom;