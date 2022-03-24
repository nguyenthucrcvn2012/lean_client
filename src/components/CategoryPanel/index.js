import React from 'react';
import { createPortal } from 'react-dom';
import {
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import {
  ContextMenu,
  MenuItem,
  ContextMenuTrigger
} from 'react-contextmenu';
import Panel from 'components/Panel';


const CategoryPanel = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <ContextMenuTrigger id="category-panel-context-menu">
        <Panel sx={{ height: '100%', overflow: 'auto' }}>
          <Panel.Header>
            カテゴリ
          </Panel.Header>
          <Panel.Body>
            <List component="nav"
              sx={{
                '&& .Mui-selected': {
                  bgcolor: '#A8C6EE',
                  '&, & .MuiListItemIcon-root': {
                    // color: '#fff',
                  },
                  '&:hover': {
                    bgcolor: '#CACACA',
                  }
                },
                '& .MuiListItemButton-root:hover': {
                  bgcolor: '#CACACA',
                  '&, & .MuiListItemIcon-root': {
                    // color: '#fff',
                  },
                },
              }}
            >
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemText
                  primaryTypographyProps={{ fontSize: '0.85rem', lineHeight: '0.85rem' }}
                  primary="らくらく"
                />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText
                  primaryTypographyProps={{ fontSize: '0.85rem', lineHeight: '0.85rem' }}
                  primary="その也"
                />
              </ListItemButton>
            </List>
          </Panel.Body>
        </Panel>
      </ContextMenuTrigger>
      {createPortal(
        <div>
          <ContextMenu id="category-panel-context-menu">
            <MenuItem onClick={() => {}}>編集</MenuItem>
            <MenuItem divider />
            <MenuItem onClick={() => {}}>登録先カテゴリから削除</MenuItem>
            <MenuItem onClick={() => {}}>削除取り消し</MenuItem>
            <MenuItem onClick={() => {}}>追加取り消し</MenuItem>
          </ContextMenu>
        </div>,
        document.body
      )}
    </>
  );
};

export default CategoryPanel;