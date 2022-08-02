const router = require("express").Router();

const {
  getCustomers,
  addCustomer,
  editCustomer,
  deleteCustomer,
  getCustomerById
} = require("../controllers/customer.controller");

router.get("/customers", getCustomers);
router.get("/customers/view/:id", getCustomerById);
router.post("/customers/add", addCustomer);
router.put("/customers/edit/:id", editCustomer);
router.delete("/customers/delete/:id", deleteCustomer);

module.exports = router;