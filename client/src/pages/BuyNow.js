import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BuyNow = () => {
    const [ product, setProduct ] = useState({});
    const {id} = useParams();

    const navigate = useNavigate();

    const totalPrice = () => {
        let total = 0;
        product.forEach((product) => {
            total += product.price;
        })
        return total.toFixed(2);
    }

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

    const paymentHandler = (_id) => {
        axios.delete('http://localhost:8000/api/listing/delete/' + _id)
            .then((res) => {
                navigate('/')
            })
            .catch((err)=> {
                console.log(err)
            })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-7'>
                    <div className='row border shadow rounded-4 my-2 p-2'>
                        <div className='col-5'>
                            <img src={ product.imageLink } 
                                className='rounded-5 cart-img img-thumbnail' alt=''/>
                        </div>
                        <div className='col'>
                            <h6>{ product.productName }</h6>
                            <span>${ product.price }</span>
                        </div>
                        <hr className='border border-3'/>
                    </div>
                </div>
                <div className='col'>
                    <h4>Pay with Card</h4>
                    <div className='row p-2'>
                        <label className='form-label'>Email</label>
                        <input type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='row p-2'>
                        <label className='form-label'>Card Information</label>
                        <input type='text'
                            placeholder='1234 1234 1234 1234'
                            maxLength={19}
                            className='form-control'
                        />
                        <div className='row input-group'>
                            <input type='text'
                                placeholder='MM/YY'
                                maxLength={5}
                                className='form-control'
                            />
                            <input type='text'
                                placeholder='CVC'
                                maxLength={3}
                                className='form-control'
                            />
                        </div>
                    </div>
                    <div className='p-2 row'>
                        <label className='form-label'>Name on card</label>
                        <input type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='row p-2'>
                        <label className='form-control'>United States</label>
                        <input type='text'
                            placeholder='ZIP'
                            className='form-control'
                        />
                    </div>
                    <div className='p-2 row'>
                        <button onClick={ e => {paymentHandler(product._id) } }
                            className='btn btn-primary rounded-3 fw-bold'>
                            Pay
                        </button> 
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BuyNow;