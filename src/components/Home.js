import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        const file = event.target.files[0].name;
        console.log("uploaded"+{file});
    }

    handleClick(event) {
         this.refs.fileUploader.click();
    }

    render() {

        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">OCR Text Detector</h1>
                    <p className="lead">This is a simple Text recognizing application.</p>
                    <hr className="my-4"/>
                    <p>It detect the text in the Image and give back to you as text format.</p>

                    <form onSubmit={this.handleSubmit}>
                        <div className="upload" onClick={this.handleClick}>
                            <h5>Choose file</h5>
                            <input type="file" ref="fileUploader"  id="file"/>
                        </div>

                        <button className="btn btn-primary btn-lg" type="submit">Upload Image</button>
                    </form>

                </div>

                <div className="card">
                    <img id="img" src="../images/sd.jpg" className="card-img-top" alt="uploaded"/>
                    <div className="card-body">
                        <h5 className="card-title">Result for Uploaded Image</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                        <button className="btn btn-success">Save the result</button>
                    </div>
                </div>

            </div>
        );
    }


}

export default Home;
