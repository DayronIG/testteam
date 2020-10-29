import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const HomePage = () => {
  return <div>hola Mundo</div>;
};

HomePage.propTypes = {};

export default withStyles(styles)(HomePage);
