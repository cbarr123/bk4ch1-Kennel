import React, { Component } from 'react'
// import './Kennel.css'


class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2>Employee Card</h2>
          <h2>Name: <span>{this.props.employee.name}</span></h2>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;