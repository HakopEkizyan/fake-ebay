const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/febaydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established connection to the database"))
    .catch(err => console.log(err));