import React, {Component} from 'react';
import "../App.css";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            conpassword: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange=(event)=> {
        this.setState({
         [event.target.name]:event.target.value

         });
    }


    handleSubmit=(event)=> {
        event.preventDefault();
        fetch('http://localhost:8080/users', {
            method: 'post',
            body:[this.state.email, this.state.password]
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
                        </div>

                        <button type="submit" className="btn btn-success">SignUp</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
