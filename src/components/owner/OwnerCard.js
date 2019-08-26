import React, { Component } from 'react'
// import './src/components/Kennel.css'

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2>Owner Card</h2>
          <h2>Name: <span>{this.props.owner.name}</span></h2>
          <h2>Phone Number: <span>{this.props.owner.phoneNumber}</span></h2>
        </div>
      </div>
    );
  }
}

export default OwnerCard;