const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const connectDB = require('./DB/Connection');
const cors = require("cors");
require('dotenv/config');

let testAPIRouter = require("./routes/testAPI");

app.set('port',port);

//Middlewares
app.use(cors());
app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Api/User'));
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