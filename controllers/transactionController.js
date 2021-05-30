const { transaction } = require("../models");

class TransactionController {
  async create(req, res) {
    try {
      let data = await transaction.create(req.body);

      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error controler",
        error: e,
      });
    }
  }

  // Get All
  async getAll(req, res) {
    try {
      // Find all data
      let data = await transaction.find();

      // If no data
      if (data.length === 0) {
        return res.status(404).json({
          message: "Transaction Not Found",
        });
      }

      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // Get One
  async getOne(req, res) {
    try {
      // Find one data
      let data = await transaction.findOne({ _id: req.params.id });

      // If data not found
      if (!data) {
        return res.status(404).json({
          message: "Transaction Not Found",
        });
      }

      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // Update transaksi
  async update(req, res) {
    try {
      // Update data
      let data = await transaction.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        req.body, // This is all of req.body
        {
          new: true,
        }
      );
      // new is to return the updated transaksi data
      // If no new, it will return the old data before updated

      // If success
      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // Delete transaksi
  async delete(req, res) {
    try {
      // delete data
      await transaction.delete({ _id: req.params.id });

      return res.status(200).json({
        message: "Success",
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
}

module.exports = new TransactionController();
