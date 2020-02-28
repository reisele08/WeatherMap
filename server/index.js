const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
require('dotenv/config');


//Middlewares
app.use('/authentication', () => {
    console.log('Some authentication function can be placed here');
});



//Routes
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/authentication', (req, res) => res.send('Hello World!'));



//connect db
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => console.log("connected to db"));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));