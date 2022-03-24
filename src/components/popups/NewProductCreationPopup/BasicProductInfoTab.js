import React from 'react';
import { TabPanel } from '@mui/lab';
import {MenuItem, Input, TextField} from '@mui/material';
import InputCustom from '../../custom/InputCustom'
import SelectCustom from '../../custom/SelectCustom'

const BasicProductInfoTab = () => {

  const handleInput = (e) => {
    console.log(e.target.value)
  }

  return (
    <TabPanel value="basic_product_info">
      Add new product
      <br />
      Product Name <InputCustom name="product_name" onChange={(e) => handleInput(e)} style={{ color: 'red' }} />
      <br />
      Product Price <InputCustom name="product_price" onChange={(e) => handleInput(e)}/>
      <br />
      Descripton <InputCustom name="description" onChange={(e) => handleInput(e)}/>
      <br />
      Category 
      <SelectCustom name="category" onChange={(e) => handleInput(e)}>
        <MenuItem value={10} >New</MenuItem>
        <MenuItem value={20} disableGutters={true}>Like new</MenuItem>
        <MenuItem value={30} autoFocus={true}>Second Hand</MenuItem>
      </SelectCustom>
      <br />
      Branch 
      <SelectCustom name="branch" onChange={(e) => handleInput(e)}>
        <MenuItem value={10} >Vietnam</MenuItem>
        <MenuItem value={20}>China</MenuItem>
        <MenuItem value={30} selected={true}>Japan</MenuItem>
      </SelectCustom>
    </TabPanel>
  )
}

export default BasicProductInfoTab;