import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    padding: '5px',
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    textAlign: 'left',
    flexGrow: 1,
  },
  tabs: {
    textAlign: 'center',
    flexGrow: 1,
  },
}));

export default useStyles;
