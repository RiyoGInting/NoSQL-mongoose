const validator = require("validator");
const { supplier } = require("../../models");

exports.create = async (req, res, next) => {
  const errors = [];

  let findSupplier = await supplier.findOne({ _id: req.body.supplier_id });

  if (!findSupplier) {
    errors.push("Supplier not found");
  }

  if (!validator.isNumeric(req.body.price)) {
    errors.push("Price must be a number");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      message: errors.join(", "),
    });
  }
  next();
};

exports.update = async (req, res, next) => {
  const errors = [];

  if (req.body.price && !validator.isNumeric(req.body.price)) {
    errors.push("Price must be a number");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      message: errors.join(", "),
    });
  }
  next();
};
