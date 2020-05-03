import React from 'react';

function ViewResult(){

    const [datas, setDatas] = useState([]);
    useEffect(() => {
    getdata();
}, []);

const getdata = async () => {
    const response = await fetch(
        "http://localhost:8080/picture"
    );
    const data = await response.json();
    setDatas(data);
};

        return (
            <div className="container">
                <div className="card">
                    <img src={datas.imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Result for Uploaded Image</h5>
                        <p className="card-text">{datas.detected_text}</p>
                        <button className="btn btn-danger">Delete the result</button>
                    </div>
                </div>
            </div>
        );

}

export default ViewResult;
