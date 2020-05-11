import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ViewResult from "./components/ViewResult";


function App() {
    return (
        <div>
            <Router>
                <div>
                    <NavBar></NavBar>
                    <hr/>
                    <Switch>
                        <Route exact path='/' exact component={LogIn}/>
                        <Route path='/home' exact component={Home}/>
                        <Route path='/signup' exact omponent={SignUp}/>
                        <Route path='/viewresult' exact component={ViewResult}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
