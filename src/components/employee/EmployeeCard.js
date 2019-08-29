import React, { Component } from 'react'
// import './Kennel.css'


class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Employee Card</h3>
          <h3>Name: <span>{this.props.employee.name}</span></h3>
          <button type="button"
            onClick={() => {this.props.history.push(`/employees/${this.props.employee.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Your Outta' Here!</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;