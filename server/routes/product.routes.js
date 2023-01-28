const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/listings/create', ProductController.createListing)
    app.get('/api/listings', ProductController.getAllListings)
    app.get('/api/listings/:id', ProductController.getOneListing)
    app.put('/api/listings/edit/:id', ProductController.editOneListing)
    app.delete('/api/listing/delete/:id', ProductController.deleteListing)
}