import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const [ productName, setProductName ] = useState("");
    const [ price, setPrice ] = useState();
    const [ condition, setCondition ] = useState("");
    const [ imageLink, setImageLink ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ postedBy, setPostedBy ] = useState("");

    const [ errors, setErrors ] = useState({})

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/listings/' + id)
            .then((res)=> {
                // console.log(res)
                setProductName(res.data.productName)
                setPrice(res.data.price)
                setCondition(res.data.condition)
                setImageLink(res.data.imageLink)
                setDescription(res.data.description)
                setPostedBy(res.data.postedBy)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/listings/edit/' + id, {
            productName,
            price,
            condition,
            imageLink,
            description,
            postedBy
        })
            .then((res) => { 
                console.log(res) 
                navigate('/products/' + id)
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div className='container-sm text-center'>
            <h3>Edit Listing</h3>
                {errors.productName && <span className="text-danger">{errors.productName.message}</span>}<br></br>
                {errors.price && <span className="text-danger">{errors.price.message}</span>}
                {errors.description && <span className="text-danger">{errors.description.message}</span>}
                {errors.postedBy && <span className="text-danger">{errors.postedBy.message}</span>}
            <form onSubmit={ onSubmitHandler } className='row'>
                <div className='p-2 col-5 mx-auto'>
                    <input type='text'
                        value={ productName }
                        className='form-control rounded-3 m-3'
                        onChange={ (e) => setProductName(e.target.value) }
                    />
                    <input type='number' step='any'
                        value={ price }
                        className='form-control rounded-3 m-3'
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                    <select className='form-select rounded-3 m-3' onChange={ (e) => setCondition(e.target.value)}>
                        <option>What kind of condition is the product in?</option>
                        <option>New</option>
                        <option>Like New</option>
                        <option>Used</option>
                        <option>Very Used</option>
                    </select>
                    <input type='text'
                        value={ postedBy }
                        className='form-control rounded-3 m-3'
                        onChange={ (e) => setPostedBy(e.target.value) }
                    />
                </div>
                <div className='p-2 col-5 mx-auto'>
                    <input type='text'
                        value={ imageLink }
                        className='form-control rounded-3 m-3'
                        onChange={ (e) => setImageLink(e.target.value) }
                    />
                    <textarea type='text'
                        value={ description }
                        className='form-control rounded-3 m-3' rows='4'
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                    <button type='submit' 
                        className='btn btn-primary fw-bold px-5 rounded-4'>
                        Edit Listing
                    </button>
                </div>
            </form>
        </div>
    )
}
export default EditProduct;