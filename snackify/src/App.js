import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import {
  HomePage,
  NavBar,
  PrivateRoute,
  LogIn,
  CompSelect,
  Register,
  CompanyData,
  EmployeeSnack,
  CompEmp,
  FormikRegisterFormEmp,
  FormikRegisterFormOrg,
  SnackList,
  RegistrationHome,
  SarahSnackList,
  CompanyLogIn
} from './Components';

const App = () => {
  const [loggedIn, setLoggedIn] = useState("")

  return (
    <div className="App">
      
      <Router>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {/* <SarahSnackList /> */}
      
      {/* <FormikRegisterFormOrg /> */}
        
          <PrivateRoute exact path='/' component={SarahSnackList} />
          <Route exact path='/CompanyOrEmployee' component={CompEmp} />
          <Route exact path='/CompanyLogIn' render={(props) => <CompanyLogIn {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route exact path='/EmployeeLogIn' render={(props) => <LogIn {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route exact path='/Register' component={RegistrationHome} />
          <Route exact path='/EmployeeRegistration' component={FormikRegisterFormEmp} />
          <Route exact path='/OrgRegistration' component={FormikRegisterFormOrg} />
          <PrivateRoute exact path='/Company-Select' component={CompSelect} />
          <PrivateRoute exact path='/CompanyData' component={CompanyData} />
          <PrivateRoute exact path='/EmployeeSnack' component={EmployeeSnack} />
        
      </Router>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    loggedInStatus: state,  
  };
};

export default connect(
  mapStateToProps,
)(App);
