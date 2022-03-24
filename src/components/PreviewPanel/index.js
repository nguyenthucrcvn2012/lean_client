import React from 'react';
import Panel from 'components/Panel';
import MDBox from 'components/MD/MDBox';
import productBGImg from 'assets/images/product_bg.png'

const PreviewPanel = () => {
  return (
    <Panel sx={{ height: '100%', overflow: 'auto' }}>
      <Panel.Header>
        プレビュー
      </Panel.Header>
      <Panel.Body padding="10px" sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        height: '100%', overflow: 'auto'
      }}>
        <MDBox sx={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <img width="100px" src={productBGImg} />
        </MDBox>
        <MDBox sx={{
          minHeight: '50px',
          border: '1px solid #C7C7C7',

        }}>
          らくらくーぽん
        </MDBox>
        <MDBox>
          <span style={{ marginRight: '15px'}}>商品番号：</span>g-003
        </MDBox>
        <MDBox>
        <span style={{ marginRight: '15px'}}>倉庫指定：</span>倉庫
        </MDBox>
        <MDBox sx={{
          marginLeft: '15px'
        }}>
          <span style={{ marginRight: '15px'}}>在庫数：</span>40
        </MDBox>
        <MDBox sx={{
          marginLeft: '15px'
        }}>
          <span style={{ marginRight: '15px'}}>パス名：</span>バソコン・周辺機器 >PCソフ卜 >その他
        </MDBox>
      </Panel.Body>
    </Panel>
  );
};

export default PreviewPanel;