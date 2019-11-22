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
  CompanyData,
  
  CompEmp,
  FormikRegisterFormEmp,
  FormikRegisterFormOrg,
  SnackList,
  RegistrationHome,
  SnackCard,  
  NutritionList,
  NutritionInfo,
  CompanyLogIn
} from './Components';

const App = () => {
  const [loggedIn, setLoggedIn] = useState("")

  return (
    <div className="App">
      
      <Router>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      
      
      
        
          <PrivateRoute exact path='/' component={SnackList} />
          <Route exact path='/CompanyOrEmployee' component={CompEmp} />
          <Route exact path='/CompanyLogIn' render={(props) => <CompanyLogIn {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route exact path='/EmployeeLogIn' render={(props) => <LogIn {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route exact path='/Register' component={RegistrationHome} />
          <Route exact path='/EmployeeRegistration' render={(props => <FormikRegisterFormEmp {...props} />)} />
          <Route exact path='/OrgRegistration' render={(props => <FormikRegisterFormOrg {...props} />)} />
          <PrivateRoute exact path='/Company-Select' component={CompSelect} />
          <PrivateRoute exact path='/CompanyData' component={CompanyData} />
          

          
        
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
