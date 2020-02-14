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
            </div>
        );
    }
}

export default Home;
