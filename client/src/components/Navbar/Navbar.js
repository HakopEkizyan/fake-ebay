import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHome, FaDollarSign } from 'react-icons/fa';
import Cart from '../Cart/Cart';

const Navbar = (props) => {
    const [ cartOpen, setCartOpen ] = useState(false);

    return (
        <div className="container-fluid pt-2">
            <div className="row">
                <div className="col-11">
                    <div className=''>
                        <span className='fs-4 fw-bold'>Fake</span>
                        <img src='/ebay-logo.png' alt='' width='90' className='d-inline-block align-text-top'/>
                    </div>
                </div>
                <div className="col">
                    <FaShoppingCart onClick={() => setCartOpen(!cartOpen)}
                        className='text-dark fs-5'
                    />
                    { cartOpen && <Cart/>}
                </div>
            </div>
            <div className="row text-center" >
                <ul className='list-inline fs-5'>
                    <li className='list-inline-item'>
                        <Link to="/" className='text-decoration-none text-dark'>
                            <FaHome/>
                        </Link>
                    </li>
                    <li className='list-inline-item'>|</li>
                    <li className='list-inline-item'>
                            <Link to={'/add-listing'} className='text-decoration-none text-dark'>
                                <FaDollarSign/>
                            </Link> 
                    </li>
                </ul>
            </div>
            <hr/>
        </div>
    )
}

export default Navbar;