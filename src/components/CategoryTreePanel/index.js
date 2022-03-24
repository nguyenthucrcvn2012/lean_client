import React from 'react';
import { createPortal } from 'react-dom';
import Panel from 'components/Panel';
import Tree from 'components/Tree';
import {
  ContextMenu,
  MenuItem,
  ContextMenuTrigger
} from 'react-contextmenu';

const structure = [
  {
    type: "folder",
    name: "全ての力テゴリ(100)",
    childrens: [
      {
        type: "folder",
        name: "グリニッジ(2)",
        childrens: [
          { type: "folder", name: "Test 1" },
          { type: "folder", name: "Test 2" }
        ]
      },
      {
        type: "folder",
        name: "らくらく(2)",
        childrens: [
          { type: "folder", name: "Test 1" },
          { type: "folder", name: "Test 2" }
        ]
      },
    ]
  }
];

const CategoryTreePanel = () => {
  return (
    <>
      <ContextMenuTrigger id="category-tree-panel-context-menu">
        <Panel sx={{ height: '100%', overflow: 'auto' }}>
          <Panel.Header>
            カテゴリツリー
          </Panel.Header>
          <Panel.Body padding="10px 0">
            <Tree data={structure} />
          </Panel.Body>
        </Panel>
      </ContextMenuTrigger>
      {createPortal(
        <div>
          <ContextMenu id="category-tree-panel-context-menu">
            <MenuItem onClick={() => {}}>追加</MenuItem>
            <MenuItem onClick={() => {}}>削除</MenuItem>
            <MenuItem divider />
            <MenuItem onClick={() => {}}>商品一覧（全商品）</MenuItem>
          </ContextMenu>
        </div>,
        document.body
      )}
    </>
  );
};

export default CategoryTreePanel;