const Product = require('../models/product.model');

module.exports.createListing = (req, res) => {
    const {productName, price, condition, imageLink, description, postedBy} = req.body;
    Product.create({ productName, price, condition, imageLink, description, postedBy })
        .then(product => res.json(product))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        });
}

module.exports.getAllListings = (req, res) => {
    Product.find()
        .then(products => {
            // console.log(products);
            res.json(products);
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        });
}

module.exports.getOneListing = (req, res) => {
    Product.findById(req.params.id)
        .then((product) => {
            // console.log(product)
            res.json(product)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        });
}

module.exports.editOneListing = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators: true})
        .then((updatedProduct) => {
            res.json(updatedProduct)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        });
}

module.exports.deleteListing = (req, res) => {
    Product.deleteOne({_id:req.params.id})
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        });
}