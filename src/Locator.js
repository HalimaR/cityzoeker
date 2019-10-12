import React from "react";
import "./App.css";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";

class Locator extends React.Component {
  
  render() {
    const map = (
      <Map center={[this.props.lat, this.props.lon]} zoom={11} width={600} height={400}>
        <Marker anchor={[this.props.lat, this.props.lon]} />
      </Map>
    );
    return (
      <div>
        <div id="mapid">
          <div> {map} </div>
          {this.props.lat}, {this.props.lon}
        </div>
      </div>
    );
  }
}
export default Locator;
