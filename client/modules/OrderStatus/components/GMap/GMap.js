import React from "react";
import styles from "./GMap.css";
import Map from "./Map";

class GMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { banchLoc, guestLoc } = this.props;
    console.log(banchLoc, guestLoc);
    return (
      <div style={{ marginTop: "80px" }} className={styles["map-container"]}>
        <Map
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?key=" +
            process.env.REACT_APP_API_KEY +
            "&libraries=geometry,drawing,places"
          }
          markers={[guestLoc, banchLoc]}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div />}
          mapElement={<div style={{ height: `100%` }} />}
          defaultCenter={banchLoc}
          defaultZoom={11}
        />
      </div>
    );
  }
}

export default GMap;
