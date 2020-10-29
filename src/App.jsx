/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NavHeader from './components/NavHeader';

const styles = (theme) => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

function App({ classes }) {
  return (
    <>
      <NavHeader />
      <CssBaseline />
      <main className={classes.main} />
    </>
  );
}

export default withStyles(styles)(App);
