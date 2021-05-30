const express = require("express");

// Import validator
const transactionValidator = require("../middlewares/validators/transactionValidator");

// Import controller
const transactionController = require("../controllers/transactionController");

// Make router
const router = express.Router();

router.post(
  "/",
  transactionValidator.createOrUpdate,
  transactionController.create
);
router.get("/", transactionController.getAll);
router.get("/:id", transactionController.getOne);
router.put(
  "/:id",
  transactionValidator.createOrUpdate,
  transactionController.update
);
router.delete("/:id", transactionController.delete);

module.exports = router;
