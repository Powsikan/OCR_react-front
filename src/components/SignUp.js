import React, {Component} from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2"/>
                    </div>

                    <button type="submit" className="btn btn-primary">SignUp</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
