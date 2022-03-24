import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import theme from 'assets/theme';
import { MaterialUIControllerProvider } from 'src/context';
import router from 'src/router';
import './App.scss';

const App = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Router>
        <MaterialUIControllerProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {router}
          </ThemeProvider>
        </MaterialUIControllerProvider>
      </Router>
    </Suspense>
  );
};

export default App;
