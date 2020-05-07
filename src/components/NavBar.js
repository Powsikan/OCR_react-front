import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary rounded">
                    <a className="navbar-brand" href="/">OCR</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  mr-auto">
                            <li><Link to={'/'} className=" nav-link" activeStyle={{color:"red"}}> Home </Link></li>
                            <li><Link to={'/viewresult'} className="  nav-link" activeStyle={{color:"red"}}>View Result</Link></li>
                        </ul>
                        <ul className="nav navbar-nav  ml-auto">
                            <li><Link to={'/login' } className="nav-link " activeStyle={{color:"red"}}>LogIn</Link></li>
                            <li><Link to={'/signup'} className=" nav-link" activeStyle={{color:"red"}}>SignUp</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
