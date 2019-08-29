import React, { Component } from 'react'
// import './components/Kennel.css'
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2>Location Card</h2>
          <h2>Name: <span>{this.props.location.name}</span></h2>
          <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
          <button type="button"
            onClick={() => {this.props.history.push(`/locations/${this.props.location.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close Location</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;