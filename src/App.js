import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer';
import Doctor from "./components/About Us/Doctor";
import Patient from "./components/About Us/Patient";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                  <Route path='/' exact component={Home}></Route>
                  <Route path='/login' component={Login}></Route>
                  <Route path='/signup' component={Signup}></Route>
                  <Route path='/Doctor' component={Doctor}></Route>
                  <Route path='/Patient' component={Patient}></Route>
                </Switch>
                   <Footer />
            </div>
        </Router>
    );
}

export default App;
