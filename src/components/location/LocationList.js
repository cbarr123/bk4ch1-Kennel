import React, { Component } from "react";
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";
import AnimalManager from "../../modules/AnimalManager";

class LocationList extends Component {
  //define what this component needs to render here
  state = {
    locations: []
  };

  componentDidMount() {
    console.log("LOCATION LIST: ComponentDidMount");
    //getAll from Location Manager, hang onto the data and put in state
    LocationManager.getAll().then(locations => {
      this.setState({
        locations: locations
      });
    });
  }

  render() {
    console.log("LOCATION LIST: Render");
    return (
      <div className="location-cards">
        {this.state.locations.map(location => (
          <LocationCard
            key={location.id}
            location={location}
            deleteLocation={this.deleteLocation}
          />
        ))}
      </div>
    );
  }

  deleteLocation = id => {
    LocationManager.delete(id).then(() => {
      AnimalManager.getAll().then(newLocations => {
        this.setState({
          locations: newLocations
        });
      });
    });
  };
}

export default LocationList;
