const mongoose = require("mongoose"); // Import mongoose
const mongooseDelete = require("mongoose-delete"); // Import mongoose-delete

const SupplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
      default: null,
      get: getPhoto,
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

// Getter photo
function getPhoto(photo) {
  if (!photo) {
    return null;
  }

  return `/images/${photo}`;
}

// Enable soft delete
SupplierSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("supplier", SupplierSchema);
