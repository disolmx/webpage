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

import { useIntl, FormattedMessage } from 'react-intl'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function LeftMenu(props) {
  const intl = useIntl()
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
        <ListItem button component={Link} naked href="/" onClick={props.onClose}>
          <ListItemIcon>{<Icon>{"home"}</Icon>}</ListItemIcon>
          <ListItemText primary={<FormattedMessage defaultMessage="Inicio" description="leftMenu: title of inicio" />} />
        </ListItem>
        <ListItem button component={Link} naked href="/about" onClick={props.onClose}>
          <ListItemIcon>{<Icon>{"info"}</Icon>}</ListItemIcon>
          <ListItemText primary={<FormattedMessage defaultMessage="Quienes somos" description="leftMenu: title of about" />} />
        </ListItem>
        <ListItem button component={Link} naked href="/schedule" onClick={props.onClose}>
          <ListItemIcon>{<Icon>{"event"}</Icon>}</ListItemIcon>
          <ListItemText primary={<FormattedMessage defaultMessage="Programa" description="leftMenu: title of schedule" />} />
        </ListItem>
        {/**<ListItem button component={Link} naked href="/events" onClick={props.onClose}>
          <ListItemIcon>{<Icon>{"event"}</Icon>}</ListItemIcon>
          <ListItemText primary={<FormattedMessage defaultMessage="Eventos" description="leftMenu: title of events" />} />
        </ListItem>
        <ListItem button component={Link} naked href="/contact" onClick={props.onClose}>
          <ListItemIcon>{<Icon>{"contact_mail"}</Icon>}</ListItemIcon>
          <ListItemText primary={<FormattedMessage defaultMessage="Contacto" description="leftMenu: title of contact" />} />
        </ListItem>**/}
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
