const express = require("express");

const itemValidator = require("../middlewares/validators/itemValidator");
const itemController = require("../controllers/itemController");

const router = express.Router();

router.post("/", itemValidator.create, itemController.create);
router.get("/", itemController.getAll);
router.get("/:id", itemController.getOne);
router.put("/:id", itemValidator.update, itemController.update);
router.delete("/:id", itemController.delete);

module.exports = router;
