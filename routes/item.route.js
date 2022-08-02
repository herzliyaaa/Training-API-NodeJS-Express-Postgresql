const router = require("express").Router();

const { getItems, addItem, getItemById, editItem } = require("../controllers/item.controller");

router.get("/items", getItems);
router.get("/items:barcode", getItemById)
router.post("/items/add", addItem);
router.put("/items/edit/:id", editItem);
// router.delete("/items/delete/:id", deleteItem);

module.exports = router;
