const express = require ('express');
const mongoose = require ('mongoose');
const cors = require("cors");
const dotenv = require('dotenv')

dotenv.config()

const authenticationRouter = require ('./routes/route');

const app = express ();


const PORT = process.env.PORT || 5000;
app.listen (PORT, () => console.log (`Server Started on ${PORT}`));

app.use (express.json ());

mongoose.connect (
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  err => {
    if (err) return console.error (err);
    console.log ('Connected to MongoDB');
  }
);

app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

app.use( authenticationRouter)