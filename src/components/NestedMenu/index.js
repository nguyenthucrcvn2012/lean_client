import React from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { NestedMenuItem } from 'mui-nested-menu';
import { useDispatch } from 'react-redux';
import { openPopup, mainGrid } from './menuSlice';
import actionMenu from 'src/config/actionMenu';
import './NestedMenu.scss';


const NestedMenu = ({ data, menuButton }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const generateNestedMenu = (menu, index) => {
    if (menu.items && menu.items.length > 0) {
      return (
        <NestedMenuItem
          key={'nest' + '_' + index}
          rightIcon={<ArrowRightIcon />}
          label={menu.label}
          parentMenuOpen={open}
        >
          {menu.items.map((item, subIndex) => generateNestedMenu(item, index  + '_' + subIndex))}
        </NestedMenuItem>
      )
    }
    if (menu.component) {
      return React.cloneElement(menu.component, {key: 'menu_' + index});
    }
    return (
      <MenuItem
        key={'menu_' + index}
        onClick={
          () => {
            switch (menu.action) {
              case actionMenu.OPEN_POPUP:
                dispatch(openPopup({...menu}));
                break;
              case actionMenu.MAIN_GRID:
                dispatch(mainGrid({...menu}));
                break;
            }
            handleClose();
          }
        }
      >
        {menu.label + '111'}
      </MenuItem>
    );
  }

  return (
    <>
      {menuButton && (
        React.cloneElement(menuButton, { onClick: handleClick })
      )}
      {!menuButton && (
        <Button
          className="main-menu-button"
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {data.label}
        </Button>
      )}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {data?.items && data.items.map((item, index) => generateNestedMenu(item, index))}
      </Menu>
    </>
  )
}

export default NestedMenu;