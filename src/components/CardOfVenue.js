import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DirectionsIcon from '@material-ui/icons/Directions';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

import settingsData from '../data/settings'
import { useIntl } from 'react-intl'

const useStyles = makeStyles( theme => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(2),
  },
}));

export default function SimpleCard() {
  const intl = useIntl()
  const classes = useStyles();
  const { venue } = settingsData()

  return (
    <Card className={classes.root} elevation={7}>
      <CardContent>
        <Typography className={classes.title} variant="subtitle1" gutterBottom>
          {intl.formatMessage({ defaultMessage:"Sede", description:"CardOfVenue: place" })}: {venue.name}
        </Typography>
        <Typography variant="body2">
          {intl.formatMessage({ defaultMessage:"El disol se realizara en las instalaciones del Instituto Tecnológico Superior de Cd. Serdán, Puebla. Se tendrá un ciclo de conferencias y talleres para los asistentes.", description:"CardOfVenue: description" })}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="caption">{venue.address}</Typography> 
        <MuiLink color="inherit" href={venue.location_url} target="_blank">
          <IconButton><DirectionsIcon /></IconButton>
        </MuiLink>
      </CardActions>
    </Card>
  );
}
