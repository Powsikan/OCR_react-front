import React, {Component} from 'react';

function buildFileSelector() {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
}

class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.fileInput = React.createRef();
    // }
    // handleSubmit(event) {
    //     event.preventDefault();
    //     alert(
    //         `Selected file - ${this.fileInput.current.files[0].name}`
    //     );
    //     console.log("uploaded");
    // }

    componentDidMount() {
        this.fileSelector = buildFileSelector();
    }

    handleFileSelect = (e) => {
        e.preventDefault();
        this.fileSelector.click();
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("image uploaded");
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
                        <a className="upload" href="" onClick={this.handleFileSelect}>choose file</a>
                        <button className="btn btn-primary btn-lg" type="submit">Upload Image</button>
                    </form>

                </div>

                <div className="card">
                    <img src="../images/upl.png" className="card-img-top" alt="uploaded"/>
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
