

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

const PORT =  8080;
const MONGO_URI = process.env.MONGODB_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`✅ Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Prevent container from staying alive on error
  });
