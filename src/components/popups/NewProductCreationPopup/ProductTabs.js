import React from 'react';
import { Tab, Box } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TabCustom from 'src/components/custom/TabCustom';
import BasicProductInfoTab from './BasicProductInfoTab';
import InventorySettingTab from './InventorySettingTab';

const ProductTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    console.log(value)
    setValue(newValue);
  };


  return (
    <TabCustom>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="商品基本情報" value="basic_product_info" />
          <Tab label="在庫設定" value="inventory_setting" />
          <Tab label="商品ページ情報" value="" />
          <Tab label="商品登録情報" value="" />
          <Tab label="商品別ポイント情報" value="" />
          <Tab label="テンプレート・表示項目" value="" />
          <Tab label="その他" value="" />
          <Tab label="二重価格表示チェック結果" value="" />
        </TabList>
        <BasicProductInfoTab />
        <InventorySettingTab />
      </TabContext>
    </TabCustom>
  )
}

export default ProductTabs;