import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';

const Product = () => {
    const [ product, setProduct ] = useState({});

    const dispatch = useDispatch();
    
    const {id} = useParams();
    // console.log(id)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/listings/" + id)
            .then((res) => {
                // console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }) 

    return (
        <div className="container-md">
            <div className='row p-2'>
                <div className="col">
                    <img src={ product.imageLink } width='600' className='img-thumbnail rounded-4' alt=""/>
                </div>
                <div className="col">
                    <div className='row'>
                        <h2>{ product.productName }</h2>
                        <p>Listed By: { product.postedBy }</p>
                    </div>
                    <p>Condition: { product.condition } </p>
                    <hr />
                    <div className="row p-2">
                        <div className="col">
                            <h4>Price: US ${ product.price }</h4>
                        </div>
                        <div className="col-5">
                            <Link to={'/Checkout/' + product._id}
                                className='btn btn-primary rounded-5 px-4 my-1 fw-bold'>
                                Buy It Now
                            </Link>
                            <button onClick={() => dispatch(addToCart({
                                _id: product._id,
                                productName: product.productName,
                                price: product.price,
                                condition: product.condition,
                                imageLink: product.imageLink,
                                description: product.description,
                                postedBy: product.postedBy
                            }))}
                                className='btn btn-info rounded-5 px-4 my-1 text-white fw-bold'>
                                Add to Cart
                            </button>
                            {/* make these two components, "cart" and "buy it now" */}
                        </div>
                    </div>
                    <hr />
                    <div className='img-thumbnail rounded-4 p-4 mt-3'>
                        <span>{ product.description }</span>
                    </div>
                </div>
                <Link to={'/products/edit/' + id }><button className='btn btn-secondary text-white px-4 my-1 fw-bold'>Edit Listing</button></Link>
            </div>
                <div className=''>
                    <hr/>
                    {/* <Featured /> */}
                </div>
        </div>
    )
}

export default Product;