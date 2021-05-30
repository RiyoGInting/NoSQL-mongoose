const mongoose = require("mongoose"); // Import mongoose
const mongooseDelete = require("mongoose-delete"); // Import mongoose-delete

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    supplier_id: {
      type: mongoose.Schema.ObjectId,
      ref: "supplier",
      required: true,
    },
    image: {
      type: String,
      default: null,
      required: false,
      // Getter
      get: getImage,
    },
  },
  {
    // Enable timestamps
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    toJSON: { getters: true }, // Enable getter
  }
);

// Getter function for item
function getImage(image) {
  if (!image) {
    return null;
  }

  return `/images/${image}`;
}

// Enable soft delete
ItemSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("item", ItemSchema); // Export item models
