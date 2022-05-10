import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";


const NewProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    const [errors, setErrors] = useState({});

    //Function to save in the backend
    const saveProduct = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            name: name,
            price: price,
            description: description
        })
            .then(res => {
                console.log(res);
                history.push("/");
            })
            .catch( error => {
                setErrors(error.response.data.errors);
                console.log(error.response.data.errors);
            });
    }

    return( 
        <div>
            <h1>New Product</h1>
            <form onSubmit={saveProduct}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input id="name" name="name" type="text" className="form-control" value={name} onChange= {(e) => setName(e.target.value)} />
                    {errors.name ? <span className="text-danger">{errors.name.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input id="price" name="price" type="number" className="form-control" value={price} onChange= {(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input id="description" name="description" type="text" className="form-control" value={description} onChange= {(e) => setDescription(e.target.value)} />
                    {errors.description ? <span className="text-danger">{errors.description.message}</span> : null}
                </div>
                <input type="submit" className="btn btn-success" value="Save" />
            </form>
        </div>
    )


}

export default NewProduct;