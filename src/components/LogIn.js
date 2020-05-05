import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../App.css";

class LogIn extends Component {
    render() {
        return (
            <div className="container">
                <div className="cont">
                    <h2 className="heading">Login here</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="example@abc.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                     <Link to={'/'}> <button type="submit" className="btn btn-primary">LogIn</button></Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default LogIn;
