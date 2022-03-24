import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MainMenu from 'components/MainMenu';
import InputSearch from 'components/InputSearch';
import HelpMenu from 'components/HelpMenu';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import * as path from '../../config/path'

import logo from 'assets/images/logo.png';


const TopBar = () => {

  return (
    <AppBar position="static" color="gwPrimary">
      <Toolbar disableGutters>
        <Box sx={{ marginRight: '3%' }} to="/" component={Link}>
          <img src={logo}/>
        </Box>
        <Box sx={{ fontSize: '1rem' }}>
          <Link to={path.SINGLE} style={{ color: 'white'}}> greenwich </Link>
        </Box>

        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
          <MainMenu />
        </Container>
        <Box sx={{ padding: '0 5px', display: 'flex' }}>
          <InputSearch />
        </Box>
        <HelpMenu />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;