const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/product.route");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routers
app.use("/api/products/", productRouter);

let uri =
  "mongodb+srv://user1:user123@crud-api.txdan7k.mongodb.net/?retryWrites=true&w=majority&appName=CRUD-API";

mongoose
  .connect(uri)
  .then(() => {
    console.log("database connected");
    app.listen("8080", () => {
      console.log("server is running on http://localhost:8080/");
    });
  })
  .catch(() => {
    console.log("database connection failed!");
  });
