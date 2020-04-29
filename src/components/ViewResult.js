import React, {Component} from 'react';

class ViewResult extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <img src="../images/upl.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Result for Uploaded Image</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <button className="btn btn-danger">Delete the result</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewResult;
