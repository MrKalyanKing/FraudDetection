const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/route');

const app = express();

dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

const PORT = process.env.PORTS || 5000;
const url=process.env.MONGODB_URI

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
mongoose.connect(url)
.then(()=>{
    console.log("DB COnnected")
})
.catch((err)=>{
    console.log(err)
})