const mongoose = require("mongoose"); // Import mongoose

const uri = process.env.MONGO_URI; // Add URI MongoDB Atlas

// Connect express to MongoDB with mongoose
mongoose
  .connect(uri, {
    useUnifiedTopology: true, // Must be added
    useNewUrlParser: true, // Must be added
    useCreateIndex: true, // Use to enable unique data type
    useFindAndModify: false, // Use findOneAndUpdate instead of findAndModify
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.error(err));

// Import models
const customer = require("./customer");
const item = require("./item");
const supplier = require("./supplier");
const transaction = require("./transaction");

module.exports = { customer, item, supplier, transaction }; // Export models
