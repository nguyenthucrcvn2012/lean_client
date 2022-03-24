import React from 'react';
import { createPortal } from 'react-dom';
import DataGrid, { Row as GridRow } from 'react-data-grid';
import MDBox from 'components/MD/MDBox';
import { IconButton } from '@mui/material';
import moment from 'moment';
import {
  ContextMenu,
  MenuItem,
  ContextMenuTrigger
} from 'react-contextmenu';
import dataRows from './data';
import Panel from 'components/Panel';
import Button from 'components/buttons/Button';
import allImg from 'assets/images/buttons/all.png';
import extractionImg from 'assets/images/buttons/extraction.png';
import reverseImg from 'assets/images/buttons/reverse.png';
import selectionImg from 'assets/images/buttons/selection.png';
import releaseImg from 'assets/images/buttons/release.png';
import infoImg from 'assets/images/icon_info.png';
import gearImg from 'assets/images/buttons/icon_gear.png';

import { useSelector } from 'react-redux';
import { selectMainGrid } from 'components/NestedMenu/menuSlice';

const columns = [
  { key: 'itemManageNumber', name: '商品管理番号（URL）', resizable: true },
  { key: 'itemNumber', name: '商品番号', resizable: true },
  { key: 'allItemDirectoryID', name: '全商品ディレクトリID', resizable: true },
  { key: 'itemName', name: '商品名', resizable: true },
  { key: 'itemPrice', name: '販売価格', resizable: true },
];

const rowKeyGetter = (row) => {
  return row.id;
}
let i = 0;
const rows = dataRows.map(item => ({...item, id: i++}));

const RowRenderer = (props) => {
  return (
    <ContextMenuTrigger id="main-panel-context-menu" collect={() => ({ rowIdx: props.rowIdx })}>
      <GridRow {...props} />
    </ContextMenuTrigger>
  );
}

const MainPanel = () => {
  const [selectedRows, setSelectedRows] = React.useState(() => new Set());
  const menuMainGrid = useSelector(selectMainGrid);

  React.useEffect(() => {
    if (menuMainGrid.id === 'edit.select_all') {
      setSelectedRows(() => new Set(rows.map(row => row.id)));
    } else if (menuMainGrid.id === 'edit.deselect_all') {
      setSelectedRows(() => new Set());
    }
  }, [menuMainGrid]);

  return (
    <>
      <Panel sx={{ height: '100%' }}>
        <Panel.Header>
          <MDBox sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <MDBox>
              商品一覧
            </MDBox>
            <MDBox sx={{
              display: 'flex',
            }}>
              <Button group="left" image={releaseImg} style={{ height: '23px' }}>解除</Button>
              <Button group="right" image={selectionImg} style={{ height: '23px' }}>全選択</Button>
            </MDBox>
          </MDBox>
        </Panel.Header>
        <Panel.Body style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <MDBox
            padding="3px 10px"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#F0F2F5'
            }}>
            <MDBox sx={{ display: 'flex', gap: '5px' }}>
              <Button image={allImg}>全商品 表示</Button>
              <Button image={extractionImg}>RMS未反映 抽出</Button>
              <Button image={reverseImg}>表示中の商品以外 抽出</Button>
              <Button image={selectionImg}>二重価格表示チェック結果</Button>
            </MDBox>
            <MDBox sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <Button>ディレクトリID作成</Button>
              <Button>ディレクトリID保存</Button>
              <IconButton>
                <img src={gearImg} alt="" />
              </IconButton>
            </MDBox>
          </MDBox>
          <DataGrid
            components={{ rowRenderer: RowRenderer }}
            rowKeyGetter={rowKeyGetter}
            selectedRows={selectedRows}
            onSelectedRowsChange={setSelectedRows}
            className="gw-grid-data"
            columns={columns} rows={rows}
            style={{ flex: 'auto' }}
            rowHeight={28}
            rowClass={(row) => {
              if (row.controlColumn === 'n') {
                return 'add-new-item';
              }
              if (row.controlColumn === 'd') {
                return 'delete-item';
              }
              return undefined;
            }}
          />
          <MDBox
            padding="10px 10px"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '50px',
            }}>
            <MDBox sx={{ display: 'flex', gap: '5px' }}>
              <Button>一括項目選択肢登録</Button>
              <Button>一括項目選択肢RMS削除</Button>
              <Button>項目選択肢別在庫登録</Button>
            </MDBox>
            <MDBox sx={{ display: 'flex', gap: '5px' }}>
              <Button>楽天ページ</Button>
              <Button>編集</Button>
            </MDBox>
          </MDBox>
          <MDBox
            padding="0 10px"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '60px',
              borderTop: '6px solid #525252'
            }}>
              <MDBox
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '-32px'
                }}
              >
                <img src={infoImg} alt="" />
              </MDBox>
              <MDBox
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '-32px',
                  fontSize: '0.75rem'
                }}
              >
                {moment().format('YYYY年MM月DD日 H:m:s')}
              </MDBox>
          </MDBox>
        </Panel.Body>
      </Panel>
      {createPortal(
        <div>
          <ContextMenu id="main-panel-context-menu">
            <MenuItem onClick={() => {}}>新規商品作成</MenuItem>
            <MenuItem onClick={() => {}}>コピーして新規商品作成（個別）</MenuItem>
            <MenuItem onClick={() => {}}>コピーして新規商品作成（複数）</MenuItem>
            <MenuItem onClick={() => {}}>商品編集</MenuItem>
            <MenuItem onClick={() => {}}>商品RMS反映</MenuItem>
            <MenuItem divider />
            <MenuItem onClick={() => {}}>倉庫に入れる</MenuItem>
            <MenuItem onClick={() => {}}>削除取り消し</MenuItem>
            <MenuItem divider />
            <MenuItem onClick={() => {}}>すべての登録先カテゴリから削除</MenuItem>
          </ContextMenu>
        </div>,
        document.body
      )}
    </>
  );
}

export default MainPanel;