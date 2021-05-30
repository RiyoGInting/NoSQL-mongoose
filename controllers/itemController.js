const { item } = require("../models");

class ItemController {
  async create(req, res) {
    try {
      let data = await item.create(req.body);

      return res.status(201).json({
        message: "Item created",
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
      const data = await item.find();

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
      const data = await item.findOne({ _id: req.params.id });

      if (!data) {
        return res.status(404).json({
          message: "Item Not Found",
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
      const data = await item.findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        req.body,
        {
          new: true,
        }
      );

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

  async delete(req, res) {
    try {
      const data = await item.delete({ _id: req.params.id });

      return res.status(200).json({
        message: "Item has been deleted",
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
}

module.exports = new ItemController();
