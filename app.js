const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
const productsRoute = require("./routes/products");


const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionSuccessStatus: 200
  };

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/products", productsRoute);

module.exports = app;
