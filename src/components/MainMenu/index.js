import React from 'react';
import { styled } from '@mui/system';
import ImageButton from 'components/buttons/ImageButton';
import menuFile from './menu-file';
import menuEdit from './menu-edit';
import menuSearch from './menu-search';
import menuExtract from './menu-extract';
import menuCabinet from './menu-cabinet';
import menuSetting from './menu-setting';
import menuSpecial from './menu-special';
import upImg from 'assets/images/buttons/icon_up.png';
import changeImg from 'assets/images/buttons/icon_change.png';
import searchBigImg from 'assets/images/buttons/icon_search_big.png';

import NestedMenu from 'components/NestedMenu';

const HSeparator = styled('div')({
  border: '1px solid #C7C7C7',
});

const MainMenu = () => {
  return (
    <>
      <NestedMenu
        data={menuFile}
      />
      <NestedMenu
        data={menuEdit}
      />
      <NestedMenu
        data={menuSearch}
      />
      <NestedMenu
        data={menuExtract}
      />
      <NestedMenu
        data={menuCabinet}
      />
      <NestedMenu
        data={menuSetting}
      />
      <HSeparator />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        margin: '0 10px'
      }}>
        <ImageButton>
          <img src={upImg} alt="" />
        </ImageButton>
        <ImageButton>
          <img src={changeImg} alt="" />
        </ImageButton>
        <ImageButton>
          <img src={searchBigImg} alt="" />
        </ImageButton>
      </div>
      
      <HSeparator />
      <NestedMenu
        data={menuSpecial} 
      />
    </>
  );
};

export default MainMenu;