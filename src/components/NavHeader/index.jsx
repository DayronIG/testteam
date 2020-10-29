/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, Switch, Route } from 'react-router-dom';

import useStyles from './styles';
import HomePage from '../../pages/HomePage';
import ClientPage from '../../pages/ClientPage';
import ProductPage from '../../pages/ProductPage';
import ContactPage from '../../pages/ContactPage';

const NavHeader = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleTabChange = (event, Value) => {
    setValue(Value);
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              Arena Data
            </Typography>
            <Tabs
              value={value}
              onChange={handleTabChange}
              className={classes.tabs}
            >
              <Tab label="Home" component={Link} to="/" value="/" />
              <Tab label="Pruductos" component={Link} to="/product" />
              <Tab label="Clientes" component={Link} to="/clients" />
              <Tab label="Contacto" component={Link} to="/contact" />
            </Tabs>
          </Toolbar>
        </AppBar>
        <main className={classes.main}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/product"
              render={(props) => <ProductPage {...props} title="Productos" />}
            />
            <Route
              exact
              path="/clients"
              render={(props) => <ClientPage {...props} title="Clientes" />}
            />
            <Route
              exact
              path="/contact"
              render={(props) => <ContactPage {...props} title="ContactPage" />}
            />
          </Switch>
        </main>
      </div>
    </>
  );
};

NavHeader.propTypes = {};

export default NavHeader;
