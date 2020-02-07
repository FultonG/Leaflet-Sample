import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import API from '../utils/API';

const SimpleExample = () => {

  // These variables are state variables for more info look into hooks
  // https://reactjs.org/docs/hooks-intro.html
  const [latitude, setLatitude] = useState(25.7574);
  const [longitude, setLongitude] = useState(-80.3733);
  const [zoom, setZoom] = useState(17);
  const [shape, setShape] = useState([]);

  // This useEffect runs when the component is loaded, we're calling
  // the "API" to get the shape and set it to our state variable
  useEffect(() => {
    setShape(API.getShape());
  }, []);

  return (
    // The LeafletMap component is the entire Map
    <LeafletMap center={[latitude, longitude]} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <Marker position={[25.7601, -80.3744]}>
        <Popup>
          <div>
            <h2>FIU Parking Garage 6</h2>
            <p>Home of the UPE Maker Space</p>
          </div>
        </Popup>
      </Marker>
      <Polyline positions={shape}>
        <Popup>
          <div>
            <h2>really dumb line</h2>
          </div>
        </Popup>
      </Polyline>
    </LeafletMap>
  );
}

export default SimpleExample;