import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    const [errors, setErrors] = useState("");

    //To get initial values
    useEffect( () => {

        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                console.log(res.data);
                setName(res.data.name);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(error => console.log(error));


    }, [id]);

    //To update
    const updateProduct = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/"+id, {
            name: name,
            price: price,
            description: description
        })
            .then(res => history.push("/"))
            .catch(error => setErrors(error.response.data.errors));
    }
 
    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={updateProduct}>
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
                <input type="submit" className="btn btn-success" value="Update" />
            </form>
        </div>
    )

}

export default UpdateProduct;