import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {
    //define here what this component needs to render
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("EMPLOYEE LIST: ComponentDidMount");
    EmployeeManager.getAll()
    .then(employees => {
        this.setState({
            employees: employees
        });
    });
}

render(){
    console.log("EMPLOYEE LIST: Render");
    return(
        <React.Fragment>
            <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/employees/new")}}>
                Hire Employee
            </button>
            </section>

            <div className="container-cards">
                {this.state.employees.map(employee => (
                    <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    deleteEmployee={this.deleteEmployee}
                    />
                ))}
            </div>
        </React.Fragment>
    )
}

deleteEmployee = id => {
    EmployeeManager.delete(id).then(() => {
        EmployeeManager.getAll().then(newEmployees => {
        this.setState({
          employees: newEmployees
        });
      });
    });
  };

}

export default EmployeeList;