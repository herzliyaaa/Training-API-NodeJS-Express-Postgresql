const pool = require("../config/db.config");

const getCustomers = (req, res) => {
  pool.query("SELECT * FROM customers", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getCustomerById = (req, res) => {
  const id = req.params.id;
  pool.query(
    "SELECT * FROM customers WHERE id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const addCustomer = (req, res) => {
  const { firstname, middlename, lastname, address, contact} = req.body;
  pool.query(
    "INSERT INTO customers (firstname, middlename, lastname, address, contact) VALUES ($1, $2, $3, $4, $5)",
    [firstname, middlename, lastname, address, contact],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Customer Created Successfully!");
    }
  );
};

const editCustomer = (req, res) => {
  const id  = req.params.id;
  const { firstname, middlename, lastname, address, contact } = req.body;
  pool.query(
    "UPDATE customers SET firstname = $1, middlename = $2, lastname = $3, address = $4, contact = $5 WHERE id = $6",
    [firstname, middlename, lastname, address, contact, id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Customer Updated Successfully!");
    }
  );
};

const deleteCustomer = (req, res) => {
  const id = req.params.id;
  pool.query(
    "DELETE FROM customers WHERE id = $1",
    [id],
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
