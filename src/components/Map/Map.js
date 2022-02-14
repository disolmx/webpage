import React, { useState } from 'react'
import Map, { Marker, NavigationControl } from 'react-map-gl';
import settingsData from '../../data/settings'
import LocationIcon from '@material-ui/icons/LocationOn';
import useWindowWidth from '../../utils/useWindowWidth'
import { CardOfVenue } from '../'

const styles= {
  navigationControl: {
    position: 'absolute',
    right: 0,    
  },
  cardOfVenue: {
    position: "absolute",
    bottom: "25px",
    maxWidth: "130px",    
  }
}

function LocationMap(){
  const { venue } = settingsData()
  const width = useWindowWidth()-15
  const [viewport, setViewport] = useState({
    latitude: venue.lat,
    longitude: venue.lng,
    zoom: 7,
    width: '100vw',
    height: "600px",
  })

  if(width != viewport.width){
    setViewport({
      ...viewport,
      width: width
    })
  }

  return(
      <Map
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.MAPS_KEY}
        onViewportChange={setViewport}
        scrollZoom={false}
        initialViewState={viewport}
        style={{ width:viewport.width, height:viewport.height }}
      >
        <Marker latitude={venue.lat} longitude={venue.lng} offsetLeft={-20} offsetTop={-10}>
          <LocationIcon fontSize="large" />
        </Marker>

        <div style={styles.navigationControl}>
          <NavigationControl />
        </div>

        <div className="card-of-venue-cls" style={styles.cardOfVenue}>
          <CardOfVenue />
        </div>
      </Map>
  )
}

export default LocationMap
