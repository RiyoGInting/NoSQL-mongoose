require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// Express
const express = require("express");
const fileUpload = require("express-fileupload");

// Import routes
const customerRoutes = require("./routes/customerRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const itemRoutes = require("./routes/itemRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

// Make express app
const app = express();

// Body-parser to read req.body
app.use(express.json()); // Enable req.body JSON type
app.use(
  express.urlencoded({
    extended: true,
  })
); // Support urlencode body

// To read form-data request
app.use(fileUpload());

// Set static file directory
app.use(express.static("public"));

// Make routes
app.use("/api/v1/customer", customerRoutes);
app.use("/api/v1/supplier", supplierRoutes);
app.use("/api/v1/item", itemRoutes);
app.use("/api/v1/transaction", transactionRoutes);

// Running server
app.listen(3000, () => console.log("Server running on 3000"));
