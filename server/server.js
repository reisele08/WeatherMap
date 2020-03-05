const express = require('express');
const app = express();

const port = process.env.PORT || 9000;
app.set('port',port);


const mongoose = require('mongoose');

const cors = require("cors");
app.use(cors());


const router = require('./router');
app.use('/', router);

var authentication = require('./authentication/authentication')



require('dotenv/config');
let testAPIRouter = require("./routes/testAPI");


//Middlewares
// Connect React with Express
app.use("/testAPI", testAPIRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = server