const validator = require("validator");
const { item, customer } = require("../../models");

exports.createOrUpdate = async (req, res, next) => {
  const dataItem = await item.findOne({ _id: req.body.item_id });

  if (!dataItem) {
    return res.status(400).json({
      message: "Item not found",
    });
  }

  const dataCustomer = await customer.findOne({ _id: req.body.customer_id });

  if (!dataCustomer) {
    return res.status(400).json({
      message: "Customer not found",
    });
  }

  if (!validator.isNumeric(req.body.total_item)) {
    return res.status(400).json({
      message: "Total item must be a number",
    });
  }

  // Calculate total
  req.body.total_price = dataItem.price * req.body.total_item;

  next();
};
