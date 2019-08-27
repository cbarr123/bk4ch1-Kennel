import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
// import AnimalCard from './animal/AnimalCard'
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm'
//only include these once they are built - previous practice exercise
// import LocationCard from './location/LocationCard'
import LocationList from "./location/LocationList";
import LocationDetail from './location/LocationDetail'
// import EmployeeCard from './employee/EmployeeCard'
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm"
// import OwnerCard from './owner/OwnerCard'
import OwnerList from "./owner/OwnerList";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        <Route
          path="/animal"
          render={props => {
            return <AnimalList {...props}/>;
        }}
        />
        <Route
          exact
          path="/animals"
          render={props => {
            return <AnimalList {...props}/>;
          }}
        />
        <Route 
            path="/animals/new" 
            render={(props) => {
            return <AnimalForm {...props} />
        }} />
        <Route
          path="/location"
          render={props => {
              return <LocationList />;
            }}
          />
          {/* Employee*/}
        <Route
          path="/employee"
          render={props => {
              return <EmployeeList {...props}/>;
            }}
        />
        <Route
          path="/employees"
          render={props => {
              return <EmployeeList {...props}/>;
            }}
        />
        <Route 
            path="/employees/new" 
            render={(props) => {
            return <EmployeeForm {...props} />
        }} />
        {/* Owner*/}
        <Route
          path="/owner"
          render={props => {
            return <OwnerList />;
          }}
        />
        {/* Make sure you add the `exact` attribute here */}
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
            );
          }}
        />
        {/* Make sure you add the `exact` attribute here */}
        <Route
          exact
          path="/locations"
          render={props => {
            return <LocationList />;
          }}
        />
        <Route
          path="/locations/:locationId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              <LocationDetail locationId={parseInt(props.match.params.locationId)}  {...props}/>
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
