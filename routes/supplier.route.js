const router = require("express").Router();

const {
  getSuppliers,
  getSupplierById,
  addSupplier,
  editSupplier,
  deleteSupplier,
} = require("../controllers/supplier.controller");

router.get("/suppliers", getSuppliers);
router.get("/suppliers/view/:id", getSupplierById);
router.post("/suppliers/add", addSupplier);
router.put("/suppliers/edit/:id", editSupplier);
router.delete("/suppliers/delete/:id", deleteSupplier);


module.exports = router;