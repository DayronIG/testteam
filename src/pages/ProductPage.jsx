import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ListSubheader from '@material-ui/core/ListSubheader';
import Categories from '../components/Categories';
import ListItems from '../components/ListItems';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: '15%',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 'auto',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: '64px',
  },
}));

const ProductPage = ({ title }) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  console.log(title);
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Divider />
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Categories
            </ListSubheader>
          }
        >
          <Categories />
        </List>
        <Divider />
      </Drawer>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={10}>
          <Grid item xs={10} md={14} lg={10}>
            <Paper className={fixedHeightPaper}>
              <ListItems />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

ProductPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProductPage;
