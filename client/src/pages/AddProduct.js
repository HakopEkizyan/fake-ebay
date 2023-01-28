import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = (props) => {
    // const { product, setProduct} = props;
    const [ productName, setProductName ] = useState("");
    const [ price, setPrice ] = useState();
    const [ condition, setCondition ] = useState("");
    const [ imageLink, setImageLink ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ postedBy, setPostedBy ] = useState("");

    const [ errors, setErrors ] = useState({})

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const newProduct = {
            productName: productName,
            price: price,
            condition: condition,
            imageLink: imageLink,
            description: description,
            postedBy: postedBy 
        }

        axios.post('http://localhost:8000/api/listings/create', newProduct)
            .then(res => { 
                console.log(res); 
                console.log(res.data); 
                navigate('/')
                // setProduct([...product, res.data]);
            })
            .catch((err) => {
                console.log(err)
                console.log("error was caught on front-end")
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div className='container-sm text-center'>
            <h3>Add a Listing</h3>
                {errors.productName && <span className="text-danger">{errors.productName.message}</span>}<br></br>
                {errors.price && <span className="text-danger">{errors.price.message}</span>}
                {errors.description && <span className="text-danger">{errors.description.message}</span>}
                {errors.postedBy && <span className="text-danger">{errors.postedBy.message}</span>}
            <form onSubmit={ onSubmitHandler } className='row'>
                <div className='p-2 col-5 mx-auto'>
                    <input type='text'
                        placeholder='Product name'
                        className='form-control rounded-3 m-3'
                        onChange={ (e) => setProductName(e.target.value) }
                    />
                    <input type='number' step='any'
                        placeholder='price'
                        className='form-control rounded-3 m-3'
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                    <select className='form-select rounded-3 m-3' onChange={ (e) => setCondition(e.target.value)}>
                        <option selected>What kind of condition is the product in?</option>
                        <option>New</option>
                        <option>Like New</option>
                        <option>Used</option>
                        <option>Very Used</option>
                    </select>
                    <input type='text'
                        placeholder='Posted by'
                        className='form-control rounded-3 m-3'
                        onChange={ (e) => setPostedBy(e.target.value) }
                    />
                </div>
                <div className='p-2 col-5 mx-auto'>
                    <input type='text'
                        placeholder='Link to picture of product'
                        className='form-control rounded-3 m-3'
                        onChange={ (e) => setImageLink(e.target.value) }
                    />
                    <textarea type='text'
                        placeholder='description...'
                        className='form-control rounded-3 m-3' rows='4'
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                    <button type='submit' 
                        className='btn btn-primary fw-bold px-5 rounded-4'>
                        Add Listing
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;