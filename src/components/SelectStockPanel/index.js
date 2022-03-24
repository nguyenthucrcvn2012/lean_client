import React from 'react';
import { createPortal } from 'react-dom';
import DataGrid from 'react-data-grid';
import Panel from 'components/Panel';
import { isFirefox } from 'react-device-detect';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';

const columns = [
  { key: 'itemChoiceHorizonAxis', name: '横軸選択肢', resizable: true },
  { key: 'itemChoiceSpindle', name: '縦軸選択肢', resizable: true },
  { key: 'itemChoiceStockQuantity', name: '在庫数', resizable: true },
  { key: 'itemChoiceObtaining', name: '取寄表示', resizable: true },
];

const rows = [
  {
    itemChoiceHorizonAxis: 'オブション半幅帯L000円 + 税',
    itemChoiceSpindle: 'セレク卜ボツクス',
    itemChoiceStockQuantity: '1',
    itemChoiceObtaining: '2',
  },
  {
    itemChoiceHorizonAxis: 'オブション半幅帯L000円 + 税',
    itemChoiceSpindle: 'セレク卜ボツクス',
    itemChoiceStockQuantity: '1',
    itemChoiceObtaining: '2',
  },
  {
    itemChoiceHorizonAxis: 'オブション半幅帯L000円 + 税',
    itemChoiceSpindle: 'セレク卜ボツクス',
    itemChoiceStockQuantity: '1',
    itemChoiceObtaining: '2',
  },
];

const SelectStockPanel = () => {
  return (
    <>
      <ContextMenuTrigger id="select-stock-panel-context-menu">
        <Panel sx={{ height: '100%', overflow: 'auto' }}>
          <Panel.Header>
            項目選択肢別在庫
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
          <ContextMenu id="select-stock-panel-context-menu">
            <MenuItem onClick={() => {}}>再編集</MenuItem>
            <MenuItem onClick={() => {}}>在庫編集</MenuItem>
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

export default SelectStockPanel;