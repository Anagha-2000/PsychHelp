import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer';
import Doctor from "./components/AboutUs/Doctor";
import Patient from "./components/AboutUs/Patient";
import FAQs from "./components/FAQs";

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
                </Switch>

                <h2 id="page-break"></h2>
                <FAQs />
                   <Footer />
            </div>
        </Router>
    );
}

export default App;
