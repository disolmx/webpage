import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const isBrowser = typeof(window) !== "undefined"
import { useIntl } from 'react-intl'
import db from '../services/firebase/clientApp'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  title: {
    paddingBottom: theme.spacing(2),
  },
  dateContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: 0,
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(2),
      paddingLeft: 0,
      textAlign: 'right'
    },
  },
  type: {
    fontSize: '0.9rem',
    color: "rgba(0, 0, 0, 0.54)",
  },
  hour: {
    fontSize: '1.8rem',
    color: "rgba(0, 0, 0, 0.54)",
  },
  minutes: {
    fontSize: '1.2rem',
    color: "rgba(0, 0, 0, 0.54)",
    padding: 0,
  },
  item: {
    marginTop: theme.spacing(5),
  },
  content: {
    paddingBottom: theme.spacing(1),
  },
  pos: {
    marginBottom: 0,
    marginTop: theme.spacing(3),
    fontSize: '0.9rem',
  },
}));

export default function Schedule(){
  const intl = useIntl()
  const classes = useStyles();
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("schedule").get();
      const arr = data.docs.map(doc => ({ ...doc.data(), id: doc.id, date: new Date(doc.data().date.toDate()) }))
      .sort((left, right) => { return left.sort - right.sort })

      setSchedule(arr);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const observer = db.collection("schedule").onSnapshot(data => {
      const arr = data.docs.map(doc => ({ ...doc.data(), id: doc.id, date: new Date(doc.data().date.toDate()) }))
      .sort((left, right) => { return left.sort - right.sort })

      setSchedule(arr);
    }, err => {
      console.log(`Encountered error [schedule]: ${err}`);
    });

  }, [schedule]);

  return(
    <>
      {schedule.map((x,ix) => 
        <Grid key={ix} container className={classes.item}>
          <Grid item xs={12} md={1} className={classes.dateContainer}>
            <span className={classes.hour}>{x.date.getHours()}</span>
            {" "}
            <span className={classes.minutes}>{x.date.getMinutes() < 10 ? 0 : ''}{x.date.getMinutes()}</span>
          </Grid>
          <Grid item xs={12} md={11}>
            <Card className={classes.root} elevation={2}>
              <CardContent className={classes.content}>
                <Typography variant="h5" component="h2" className={classes.title}>
                  {x.title}{" "}{x.type && (x.type == "conference" || x.type == "workshop") ? 
                    <>
                      {x.type === "conference" ? 
                        <span className={classes.type}>{`(${intl.formatMessage({ defaultMessage:"Conferencia", description:"Schedule: schedule type" })})`}</span>
                      :null}
                      {x.type === "workshop" ? 
                        <span className={classes.type}>{`(${intl.formatMessage({ defaultMessage:"Workshop", description:"Schedule: schedule type" })})`}</span>
                      :null}
                    </>
                  :''}
                </Typography>
                {x.speaker && Array.isArray(x.speaker) && x.speaker.length > 0 && x.speaker.map((y, iy) => 
                  <Typography key={iy} variant="body2" component="p">
                    {y}
                  </Typography>
                )}

                <br/>

                <Typography className={classes.pos} color="textSecondary">
                  {x.duration}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  )
}
