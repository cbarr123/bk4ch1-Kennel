import React, { Component } from "react";
import OwnerCard from "./OwnerCard";
import OwnerManager from "../../modules/OwnerManager";

class OwnerList extends Component {
  //this defines what this component needs to render
  state = {
    owners: []
  };

  componentDidMount() {
    console.log("OWNER LIST: ComponentDidMount");
    //getAll from OwnerManager, hang on to the data, put it in state
    OwnerManager.getAll().then(owners => {
      this.setState({
        owners: owners
      });
    });
  }

  render() {
    console.log("OWNER LIST: Render");

    return (
      <React.Fragment>
        <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/owners/new")}}>
                Enroll Owner
            </button>
        </section>

        <div className="container-cards">
          {this.state.owners.map(owner => (
            <OwnerCard
              key={owner.id}
              owner={owner}
              deleteLocation={this.deleteLocation}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }

  deleteAnimal = id => {
    OwnerManager.delete(id).then(() => {
      OwnerManager.getAll().then(newOwners => {
        this.setState({
          owners: newOwners
        });
      });
    });
  };



}

export default OwnerList;
