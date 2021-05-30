const { customer } = require("../models");

class CostumerController {
  async create(req, res) {
    try {
      const data = await customer.create(req.body);

      return res.status(201).json({
        message: "Costumer created",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  async getAll(req, res) {
    try {
      const data = await customer.find();

      if (data.length == 0) {
        return res.status(404).json({
          message: "Data Not Found",
        });
      }

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

  async getOne(req, res) {
    try {
      const data = await customer.findOne({ _id: req.params.id });

      if (!data) {
        return res.status(404).json({
          message: "Customer Not Found",
        });
      }

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

  async update(req, res) {
    try {
      const data = await customer.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        req.body,
        {
          new: true,
        }
      );

      return res.status(200).json({
        message: "Update Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  async delete(req, res) {
    try {
      const data = await customer.delete({ _id: req.params.id });

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

module.exports = new CostumerController();
