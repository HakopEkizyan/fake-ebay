import React from 'react';
import axios from 'axios';
import './Cart.css';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { removeItem, emptyCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';

const Cart = () => {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((product) => {
            total += product.price;
        })
        return total.toFixed(2);
    }

    return (
        <div className='cart p-4 border shadow rounded-3'>
            <h3>Products in Cart</h3>
            <div className=''>
                {products?.map((item)=> (
                    <div className='row border shadow rounded-4 my-2 p-2'>
                        <div className='col-5'>
                            <img src={ item.imageLink } 
                                className='rounded-5 cart-img img-thumbnail' alt=''/>
                        </div>
                        <div className='col'>
                            <h6>{ item.productName }</h6>
                            <span>${ item.price }</span>
                        </div>
                        <div className='col'>
                            <button onClick={() => dispatch(removeItem(item._id))}
                            className='btn btn-danger'>
                                <FaTrash className='text-white'/>
                            </button>
                        </div>
                        <hr className='border border-3'/>
                    </div>
                ))}
                <div className='row'>
                    <p className='fw-bold col-2'>Total:</p>
                    <p className='col'>${totalPrice()}</p>
                </div>
                <div className=''>
                    <Link to='/checkout'
                        className='col-5 btn btn-primary rounded-4 px-4 fw-bold mx-1'>
                        Checkout
                    </Link>
                    <button onClick={() => dispatch(emptyCart())}
                        className='col-5 btn btn-danger rounded-4 px-4 fw-bold mx-1'>
                        Empty 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;