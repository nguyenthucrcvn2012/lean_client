import React from 'react';

import TopBar from 'components/TopBar';
import Footer from 'components/Footer';
import PopupContainer from 'components/PopupContainer';

const Layout = (props) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <div style={{ height: '64px' }}>
        <TopBar />
      </div>
      <div style={{
        flex: 'auto',
        minHeight: '700px'
      }}>
        {props.children}
      </div>
      <div style={{ height: '20px' }}>
        <Footer />
      </div>
      <PopupContainer />
    </div>
  );
};

export default Layout;