//connect db
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => console.log("connected to db"));

