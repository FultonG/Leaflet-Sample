import React, { useState } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

const SimpleExample = () => {
  const [latitude, setLatitude] = useState(25.7574);
  const [longitude, setLongitude] = useState(-80.3733);
  const [zoom, setZoom] = useState(17);

  return (
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
      <Polyline positions={[[25.7596123, -80.3740048], [25.7595504, -80.3744470], [25.7595597, -80.3746499], [25.7594806, -80.3750076] ,[25.7594830, -80.3753871], [25.7594565, -80.3757942], [25.7596108, -80.3759625]]}>
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