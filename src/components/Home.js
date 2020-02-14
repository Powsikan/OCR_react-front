import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div  className="container">
                <div className="jumbotron">
                    <h1 className="display-4">OCR Text Detector</h1>
                    <p className="lead">This is a simple Text recognizing application.</p>
                    <hr className="my-4"/>
                        <p>It detect the text in the Image and give back to you as text format.</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Upload Image</a>
                </div>

                <div className="card">
                    <img src="../images/upl.png" className="card-img-top" alt="Uploaded image"/>
                        <div className="card-body">
                            <h5 className="card-title">Result for Uploaded Image</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <a href="#" className="btn btn-success">Save the result</a>
                        </div>
                </div>

            </div>
        );
    }
}

export default Home;
