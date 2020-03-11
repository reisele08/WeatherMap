
const mongoose = require('mongoose');

const connectDB = async () => {
    console.log('trying to connect DB');
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('db connected..!');

    } catch (e) {
        console.log(e);
        console.log('db is NOT connected..!\nSome error occured');

    }

};

module.exports = connectDB;