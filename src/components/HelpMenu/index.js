import React from 'react';
import IconButton from '@mui/material/IconButton';
import helpImg from 'assets/images/buttons/login_help.png';
import NestedMenu from 'components/NestedMenu';
import menuHelp from './menu-help';

const HelpMenu = () => {
  return (
    <>
      <NestedMenu
        data={menuHelp}
        menuButton={
          <IconButton>
            <img src={helpImg} />
          </IconButton>
        }
      />
    </>
  );
};

export default HelpMenu;