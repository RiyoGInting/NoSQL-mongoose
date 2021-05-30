const express = require("express");

const customerValidator = require("../middlewares/validators/customerValidator");
const customerController = require("../controllers/customerController");

const router = express.Router();

router.post("/", customerValidator.createAndUpdate, customerController.create);
router.get("/", customerController.getAll);
router.get("/:id", customerController.getOne);
router.put(
  "/:id",
  customerValidator.createAndUpdate,
  customerController.update
);
router.delete("/:id", customerController.delete);

module.exports = router;
