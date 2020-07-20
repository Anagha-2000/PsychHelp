import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

import Doctor from "./components/AboutUs/Doctor";
import Patient from "./components/AboutUs/Patient";

import LoginDoctor from "./components/Login/Login-Doctor";
import LoginPatient from "./components/Login/Login-Patient";

import SignupDoctor from "./components/Signup/Signup-Doctor";
import SignupPatient from "./components/Signup/Signup-Patient";


function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                  <Route path='/' exact component={Home}></Route>
                  <Route path='/login' component={Login}></Route>
                  <Route path='/signup' component={Signup}></Route>
                  <Route path='/doctor' component={Doctor}></Route>
                  <Route path='/patient' component={Patient}></Route>
                  <Route path='/LoginDoctor' component={LoginDoctor}></Route>
                  <Route path='/LoginPatient' component={LoginPatient}></Route>
                  <Route path='/SignupDoctor' component={SignupDoctor}></Route>
                  <Route path='/SignupPatient' component={SignupPatient}></Route>


                </Switch>



            </div>
        </Router>
    );
}

export default App;
