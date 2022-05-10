import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Product = () => {
    const {id} = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {

        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(error => console.log(error));

    }, [])

    return(
        <div className="card">
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>
            <p>
                {product.description}
            </p>
            <Link to="/" className="btn btn-primary">Go Back To Home</Link>
        </div>
    )

}
export default Product;