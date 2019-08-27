import React, { Component } from 'react'
// import './components/Kennel.css'

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2>Location Card</h2>
          <h2>Name: <span>{this.props.location.name}</span></h2>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close Location</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;