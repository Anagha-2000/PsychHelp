import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                  <Route path='/' exact component={Home}></Route>
                  <Route path='/login' component={Login}></Route>
                  <Route path='/signup' component={Signup}></Route>
                </Switch>

                   <Footer />
            </div>
        </Router>
    );
}

export default App;
