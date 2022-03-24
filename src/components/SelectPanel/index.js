import React from 'react';
import { createPortal } from 'react-dom';
import DataGrid from 'react-data-grid';
import Panel from 'components/Panel';
import { isFirefox } from 'react-device-detect';
import {
  ContextMenu,
  MenuItem,
  ContextMenuTrigger
} from 'react-contextmenu';

const columns = [
  { key: 'titleName', name: 'タイトル', resizable: true },
  { key: 'selectType', name: '選択肢タイプ', resizable: true },
];

const rows = [
  {
    titleName: 'オブション半幅帯L000円 + 税',
    selectType: 'セレク卜ボツクス',
  },
];

const SelectPanel = () => {
  return (
    <>
      <ContextMenuTrigger id="select-panel-context-menu">
        <Panel sx={{ height: '100%', overflow: 'auto' }}>
          <Panel.Header>
            項目選択肢
          </Panel.Header>
          <Panel.Body style={isFirefox ? { height: '100%' } : null}>
            <DataGrid
              className="gw-grid-data"
              columns={columns} rows={rows}
              style={{ height: '100%' }}
              rowHeight={28}
            />
          </Panel.Body>
        </Panel>
      </ContextMenuTrigger>
      {createPortal(
        <div>
          <ContextMenu id="select-panel-context-menu">
            <MenuItem onClick={() => {}}>登録</MenuItem>
            <MenuItem onClick={() => {}}>編集</MenuItem>
            <MenuItem onClick={() => {}}>表示</MenuItem>
            <MenuItem divider />
            <MenuItem onClick={() => {}}>RMSから削除</MenuItem>
            <MenuItem onClick={() => {}}>削除取り消し</MenuItem>
          </ContextMenu>
        </div>,
        document.body
      )}
    </>
  );
};

export default SelectPanel;