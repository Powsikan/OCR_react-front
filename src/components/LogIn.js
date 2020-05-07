import React, {Component} from 'react';
import "../App.css";

class LogIn extends Component {
submitLogin(e){
    e.preventDefault();

    let user={
        username:this.refs.email.value,
        password:this.refs.password.value
    }

    fetch('http://localhost:8080/users/login', {
        method: 'post',
        body: JSON.stringify(user),
        headers:{ 'Content-Type': 'application/json'}
    }).then(res => {
        if (res.ok) {
           window.location.anchor("Home.js")
            alert("User register successfully.")
        }
    });
}


    render() {
        return (
            <div className="container">
                <div className="cont">
                    <h2 className="heading">Login here</h2>
                    <form onSubmit={this.submitLogin.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input ref="email" type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="example@abc.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input ref="password" type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                     <button type="submit" className="btn btn-primary">LogIn</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LogIn;
