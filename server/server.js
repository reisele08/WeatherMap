const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const connectDB = require('./DB/Connection');
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./Api/routes/Users');

const coronaRouter = require('./Api/routes/CoronaData');

require('dotenv/config');

let testAPIRouter = require("./routes/testAPI");

app.set('port',port);

//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', userRouter);

app.use('/corona', coronaRouter);

//For not found
app.use((req, res, next) => {
	const error = new Error('Not found');
	error.status = 404;
	next(error);
});

//For any other type error
app.use((error, req, res, next) => {
	res.status(error.status || 500).json({
		error: {
			message: error.message
		}
	});
});


// app.use(express.json({ extended: false }));
// app.use('/api/userModel', require('./Api/models/User'));
// app.use('/authentication', () => {
//     console.log('Some authentication function can be placed here');
// });

// Connect React with Express
app.use("/testAPI", testAPIRouter);

//Routes
app.get('/', (req, res) => {
		res.send('Hello World!');
	}
);

app.get('/authentication', (req, res) => res.send('Hello World!'));



//connect db
// mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => console.log("connected to db"));
connectDB();



app.listen(port, () => console.log(`Example app listening on port ${port}!`));