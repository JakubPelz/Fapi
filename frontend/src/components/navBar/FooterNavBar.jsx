import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';

const FooterNavBar = () => {
  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar className="secondary-color">
          <div className="ui vertical text menu">
            <div className="item">
              <NavLink to="/" className="link-none">Hlavní stránka</NavLink>
            </div>
            <div className="item">
              <NavLink to="/customer" className="link-none">Zákaznické údaje</NavLink>
            </div>
            <div className="item">
              <NavLink to="/products" className="link-none">Produkty</NavLink>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default FooterNavBar;
