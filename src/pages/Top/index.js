import React from 'react';
import SplitPane from 'react-split-pane';

import MainPanel from 'components/MainPanel';
import CategoryTreePanel from 'components/CategoryTreePanel';
import PreviewPanel from 'src/components/PreviewPanel';
import CategoryPanel from 'src/components/CategoryPanel';
import SelectPanel from 'src/components/SelectPanel';
import SelectStockPanel from 'src/components/SelectStockPanel';
import './Top.scss';

const Top = () => {
  return (
    <>
      <SplitPane split="vertical" className="top-layout">
        <CategoryTreePanel initialSize="12%" maxSize="40%" />
        <MainPanel />
        <SplitPane split="horizontal" initialSize="18%" maxSize="40%">
            <PreviewPanel initialSize="45%" />
            <CategoryPanel />
            <SelectPanel />
            <SelectStockPanel initialSize="25%" />
          </SplitPane>
      </SplitPane>
    </>
  );
};

export default Top;
