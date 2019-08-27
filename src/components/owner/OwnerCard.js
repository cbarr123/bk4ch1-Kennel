import React, { Component } from 'react'
import './Owner.css'
// import './src/components/Kennel.css'

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Owner Card</h3>
          <h3>Name: <span>{this.props.owner.name}</span></h3>
          <h3>Phone Number: <span>{this.props.owner.phoneNumber}</span></h3>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Remove</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;