import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            file:null,
            user:"powsikan"
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState ({file: event.target.files,user: "powsikan"})
        const formData = new FormData();
        formData.append('file', this.state.file,);
        fetch('http://localhost:8080/picture/', {
            method: 'post',
            body: formData
        }).then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });

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
                        <div className="upload" name="file" onClick={this.handleClick}>
                            <h5>Choose file</h5>
                            <input type="file" name="file" ref="fileUploader"  />
                        </div>

                        <button className="btn btn-primary btn-lg" type="submit">Upload Image</button>
                    </form>

                </div>

            </div>
        );
    }


}

export default Home;
