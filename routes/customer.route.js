const router = require("express").Router();

const {
  getCustomers,
  addCustomer,
  editCustomer,
  deleteCustomer,
  getCustomerById,
  getTotalCustomers
} = require("../controllers/customer.controller");

router.get("/customers", getCustomers);
router.get("/customers/view/:id", getCustomerById);
router.post("/customers/add", addCustomer);
router.put("/customers/edit/:id", editCustomer);
router.delete("/customers/delete/:id", deleteCustomer);



// extras
router.get("/customers/get-total-customers", getTotalCustomers);

module.exports = router;