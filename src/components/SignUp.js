import React, {Component} from 'react';
import "../App.css";

class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <div className="cont">
                    <h2 className="heading">SignUp here</h2>
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
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2"/>
                        </div>

                        <button type="submit" className="btn btn-success">SignUp</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
