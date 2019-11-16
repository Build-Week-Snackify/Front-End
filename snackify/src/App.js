import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Components/HomePage';
import CompEmp from './Components/CompEmp';
import './App.css';
import NavBar from './Components/NavBar';
import CompanyLogIn from './Components/CompanyLogIn';
import EmployeeLogIn from './Components/EmployeeLogIn';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/CompanyOrEmployee' component={CompEmp} />
          <Route exact path='/CompanyLogIn' component={CompanyLogIn} />
          <Route exact path='/EmployeeLogIn' component={EmployeeLogIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
