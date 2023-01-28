import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = (props) => {
    const [ list, setList ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/listings")
            .then((res) => {
                console.log(res.data);
                setList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    
    return (
        <div className='container'>
            <div className='row'>
                { 
                    list.map((product, index) => {
                        return (
                            <div className='card single-listing p-1' key={index}>
                                <Link to={'/products/' + product._id }>
                                    <img src={ product.imageLink } alt=''
                                        className='card-img-top'
                                    />
                                </Link>
                                <div className='card-body'>
                                    <h6 className='card-title'>{ product.productName}</h6>
                                    <p className='card-text'>
                                        { product.description.substring(0, 70) }...
                                    </p>
                                    <Link to={'/Products/' + product._id}
                                        className='btn btn-primary rounded-4 px-4 fw-bold'>
                                            View Product
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products;