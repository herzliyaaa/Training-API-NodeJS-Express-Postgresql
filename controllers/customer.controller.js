const pool = require("../config/db.config");

const getCustomers = (req, res) => {
  pool.query("SELECT * FROM customers", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getCustomerById = (req, res) => {
  const customerID = req.params.id;
  pool.query(
    "SELECT * FROM customers WHERE customerID = $1",
    [customerID],
    (error, results) => {
      if (error) throw error;
      res.status(201).json(results.rows);
    }
  );
};

const addCustomer = (req, res) => {
  const { firstname, middleName, lastName, address, contact} = req.body;
  pool.query(
    "INSERT INTO customers (firstname, middleName, lastName, address, contact) VALUES ($1, $2, $3, $4, $5)",
    [firstname, middleName, lastName, address, contact],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Customer Created Successfully!");
    }
  );
};

const editCustomer = (req, res) => {
  const customerID = req.params.id;
  const { firstname, middleName, lastName, address, contact } = req.body;
  pool.query(
    "UPDATE customers SET firstname = $1, middlename = $2, lastname = $3, address = $4, contact = $5 WHERE customerID = $6",
    [firstname, middleName, lastName, address, contact, customerID],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Customer Updated Successfully!");
    }
  );
};

const deleteCustomer = (req, res) => {
  const customerID = req.params.id;
  pool.query(
    "DELETE FROM customers WHERE customerID = $1",
    [customerID],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Customer Deleted Successfully!");
    }
  );
};

module.exports = {
  getCustomers,
  getCustomerById,
  addCustomer,
  editCustomer,
  deleteCustomer
};
