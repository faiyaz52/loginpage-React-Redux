import React, { Component } from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { getEmployee } from './Redux/action';
import { connect } from 'react-redux';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    employees: PropTypes.array.isRequired,
    getEmployee: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getEmployee();
  }
  render() {
    return (
      <div>
         <nav className="navbar" style={{backgroundColor:"#3f51b5"}}>
    <div className="container-fluid" style={{height:"50px"}}>
     <h3 style={{marginLeft:"640px",color:"#ffff",letterSpacing:"2px"}}>DashBoard</h3>
    </div>
  </nav>
          <table class="table table-hover" style={{backgroundColor:"white"}}>
                 <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
             </thead>
                  {this.props.employees && this.props.employees.map((data, index) => {
                     return <tr key={(index + 1)} >
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <td>{data.gender}</td>
                      <td>{data.email}</td>                     
                      <td>{data.phoneNo}</td>
                      
                   </tr>
              })}
               </table>
          </div>       
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees
});

export default connect(mapStateToProps, { getEmployee})(App);