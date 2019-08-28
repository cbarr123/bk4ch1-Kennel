import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
// import AnimalCard from './animal/AnimalCard'
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
//only include these once they are built - previous practice exercise
// import LocationCard from './location/LocationCard'
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from "./location/LocationForm";
// import EmployeeCard from './employee/EmployeeCard'
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm";
// import OwnerCard from './owner/OwnerCard'
import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm";

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    return (
      <React.Fragment>
        <Route
            path="/login"
            component={Login}
        />
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        {/* Animals*/}
        {/*<Route
          path="/animal"
          render={props => {
            if (this.isAuthenticated()) {
              return <AnimalList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />*/}
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.isAuthenticated()) {
              return <AnimalList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/animals/new"
          render={props => {
            return <AnimalForm {...props} />;
          }}
        />
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/animals/:animalId(\d+)/edit"
          render={props => {
            return <AnimalEditForm {...props} />;
          }}
        />
        {/* Location*/}
        {/*<Route
          exact
          path="/location"
          render={props => {
            return <LocationList {...props} />;
          }}
        />*/}
        <Route
          exact
          path="/locations"
          render={props => {
            return <LocationList {...props} />;
          }}
        />
        <Route
          exact
          path="/locations/new"
          render={props => {
            return <LocationForm {...props} />;
          }}
        />
        <Route
          path="/locations/:locationId(\d+)"
          render={props => {
            // Pass the locationId to the LocationDetailComponent
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            );
          }}
        />
        {/* Employee*/}
        {/*<Route
          path="/employee"
          render={props => {
            return <EmployeeList {...props} />;
          }}
        />*/}
        <Route
          exact
          path="/employees"
          render={props => {
            return <EmployeeList {...props} />;
          }}
        />
        <Route
          exact
          path="/employees/new"
          render={props => {
            return <EmployeeForm {...props} />;
          }}
        />
        {/* Owner*/}
        {/*<Route
          path="/owner"
          render={props => {
            return <OwnerList />;
          }}
        />*/}
        <Route
          exact
          path="/owners"
          render={props => {
            return <OwnerList {...props} />;
          }}
        />
        <Route
          exact
          path="/owners/new"
          render={props => {
            return <OwnerForm {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
