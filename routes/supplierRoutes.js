const express = require("express");

const supplierValidator = require("../middlewares/validators/customerValidator");
const supplierController = require("../controllers/supplierController");

const router = express.Router();

router.post("/", supplierValidator.createAndUpdate, supplierController.create);
router.get("/", supplierController.getAll);
router.get("/:id", supplierController.getOne);
router.put(
  "/:id",
  supplierValidator.createAndUpdate,
  supplierController.update
);
router.delete("/:id", supplierController.delete);

module.exports = router;
