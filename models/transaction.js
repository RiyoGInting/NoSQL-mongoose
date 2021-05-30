const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const TransactionSchema = new mongoose.Schema(
  {
    item_id: {
      type: mongoose.Schema.ObjectId,
      ref: "item",
      required: true,
    },
    customer_id: {
      type: mongoose.Schema.ObjectId,
      ref: "customer",
      required: true,
    },
    total_item: {
      type: Number,
      required: true,
    },
    total_price: {
      type: Number,
      required: true,
    },
  },
  {
    // Enable timestamps
    timestamps: {
      createdAt: "transaction_date",
      updatedAt: "updatedAt",
    },
  }
);

// Enable soft delete
TransactionSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("transaction", TransactionSchema);
