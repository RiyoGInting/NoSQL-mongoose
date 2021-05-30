const mongoose = require("mongoose");
const validator = require("validator");
const customer = require("../../models");

exports.createAndUpdate = (req, res, next) => {
  if (!validator.isAlpha(req.body.name, ["en-US"], { ignore: " " })) {
    return res.status(400).json({
      message: "Please insert a valid name",
    });
  }
  next();
};
