const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type:String,
        required: [true, "Product name is required."],
        minLength:[2, "Product name can't be less than 2 characters."]
    },
    price: {
        type:Number,
        required:[ true, "Price is required" ]
    },
    condition: {
        type:String,
        enum: [
            'New',
            'Like New',
            'Used',
            'Very Used'
        ]
    },
    imageLink: {
        type:String
    },
    description: {
        type:String,
        required: [ true, "Description is required"]
    },
    postedBy: {
        type:String,
        required: [ true, "Name of the poster is required"]
    }

}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);