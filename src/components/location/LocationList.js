import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    //define what this component needs to render here
    state = {
        locations: [],
    }

componentDidMount() {
    console.log("LOCATION LIST: ComponentDidMount");
    //getAll from Location Manager, hang onto the data and put in state
    LocationManager.getAll()
    .then((locations) => {
        this.setState({
            locations:locations
        });
    })
}

render(){
    console.log("LOCATION LIST: Render");
    return(
        <div className="location-cards">
            {this.state.locations.map(location => <LocationCard />)}
        </div>
    )
}
}

export default LocationList