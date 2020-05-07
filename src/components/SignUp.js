import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "../App.css";
import Home from "./Home";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            conpassword: '',
            errormessage: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange=(event)=> {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam==='conpassword'){
            if (val !=="" && val !==this.state.password) {
                err = <strong style={{color:'red'}}>Your Confirmation password not matched</strong>;
            }
        }
        this.setState({
            errormessage:err
        });
        this.setState({
            [nam]:val
         });
    }


    handleSubmit=(event)=> {
        event.preventDefault();
        const data={
            username: this.state.email,
            password: this.state.password
        };
        console.log(data)
        fetch('http://localhost:8080/users', {
            method: 'post',
            body: JSON.stringify(data),
            headers:{ 'Content-Type': 'application/json'}
        }).then(res => {
            if (res.ok) {
                console.log(res.data);
                alert("User register successfully.")
            }
        });

    }

    render() {
        const {email,password,conpassword}=this.state
        return (
            <div className="container">
                <div className="cont">
                    <h2 className="heading">SignUp here</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="example@abc.com" name="email"
                                   value={email} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name="password"
                                   value={password} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2"
                                   name="conpassword" value={conpassword} onChange={this.handleChange}/>
                            {this.state.errormessage}
                        </div>

                       <Link to={'/login'}><button type="submit" className="btn btn-success">SignUp</button></Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
