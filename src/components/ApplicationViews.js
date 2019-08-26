import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
// import AnimalCard from './animal/AnimalCard'
import AnimalList from './animal/AnimalList'
//only include these once they are built - previous practice exercise
// import LocationCard from './location/LocationCard'
import LocationList from './location/LocationList'
// import EmployeeCard from './employee/EmployeeCard'
import EmployeeList from './employee/EmployeeList'
// import OwnerCard from './owner/OwnerCard'
import OwnerList from './owner/OwnerList'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animal" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/location" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/employee" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/owner" render={(props) => {
          return <OwnerList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews