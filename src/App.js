import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {  BrowserRouter as Route, Router, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
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
                        <Route exact path='/' component={Home}/>

                        <Route path='/login' component={LogIn}/>

                        <Route path='/signup' component={SignUp}/>
                        <Route path='/viewresult' component={ViewResult}/>

                    </Switch>
                </div>
            </Router>


        </div>
    );
}

export default App;
