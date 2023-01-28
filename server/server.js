const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
require('dotenv').config();

require('./config/mongoose.config');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: 'http://localhost:3000', credentials:true
}))

const Routes = require('./routes/product.routes');
Routes(app)

app.listen(port, () => console.log('Listening on port:', port) );
