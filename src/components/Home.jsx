import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', this.fileInput.current.files[0]);
        fetch('http://localhost:8080/picture/powsikan', {
            method: 'post',
            body: formData
        }).then(res => {
            if (res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });
    }

    render() {
        return (
            <div>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">OCR Text Detector</h1>
                    <p className="lead">This is a simple Text recognizing application.</p>
                    <hr className="my-4"/>
                    <p>It detect the text in the Image and give back to you as text format.</p>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <h5>Choose file</h5>
                            <input className="upload" type="file" name="file" ref={this.fileInput}/>
                        </div>
                        <button className="btn btn-primary btn-lg" type="submit">Upload Image</button>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Home;
