const bodyParser = require('body-parser');
const express = require('express');
const productRouter = require('./routes/productRouter');
const cors=require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json()); //req.body = {...}

app.use('/products', productRouter);

app.listen(3000, ()=>console.log('listen on 3000'));