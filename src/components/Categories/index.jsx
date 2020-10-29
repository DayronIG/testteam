import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import ComputerIcon from '@material-ui/icons/Computer';
import BuildIcon from '@material-ui/icons/Build';
import FolderIcon from '@material-ui/icons/Folder';
import Divider from '@material-ui/core/Divider';

const Categories = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="All" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <ComputerIcon />
        </ListItemIcon>
        <ListItemText primary="Tech" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Office" />
      </ListItem>
    </div>
  );
};

Categories.propTypes = {};

export default Categories;
