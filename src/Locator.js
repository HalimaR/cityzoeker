import React from "react";
import "./App.css";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";

class Locator extends React.Component {
 
  render() {
    const cor = this.props.getcordinate;
    const lon = cor[0];
    const lat = cor[1];
    const map = (
      <Map center={[51.096303, 2.5905441]} zoom={12} width={600} height={400}>
        <Marker anchor={[lon, lat]} />

        <Overlay anchor={[lon, lat]} offset={[120, 79]}></Overlay>
      </Map>
    );
    return (
      <div>
        <div id="mapid">
          <div> {map} </div>
          {lat} {lon}
        </div>
      </div>
    );
  }
}
export default Locator;
