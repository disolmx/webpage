import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Link from './Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

import { menus } from '../data'
import { formatMessage } from '../utils'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function LeftMenu(props) {
  const classes = useStyles();

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>    

      <List>
        {menus.map((x, index) => (
          <ListItem button key={index} component={Link} naked href={x.url} onClick={props.onClose}>
            <ListItemIcon>{<Icon>{x.icon}</Icon>}</ListItemIcon>
            <ListItemText primary={formatMessage(`menu.${x.name}`)} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        onClose={props.onClose}
        onOpen={() => {}}
        open={props.open}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  );
}

LeftMenu.defaultProps = {
  open: false,
}

LeftMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default LeftMenu;