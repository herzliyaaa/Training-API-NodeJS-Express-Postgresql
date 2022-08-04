const pool = require("../config/db.config");

const getSuppliers = (req, res) => {
  pool.query("SELECT * FROM suppliers", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getSupplierById = (req, res) => {
  const id = req.params.id;
  pool.query(
    "SELECT * FROM suppliers WHERE supplier_id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const addSupplier = (req, res) => {
  const { name, address, contact } = req.body;
  pool.query(
    "INSERT INTO suppliers (name, address, contact ) VALUES ($1, $2, $3)",
    [name, address, contact ],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Suppliers Created Successfully!");
    }
  );
};

const editSupplier = (req, res) => {
  const id = req.params.id;
  const { name, address, contact  } = req.body;
  pool.query(
    "UPDATE suppliers SET name = $1, address = $2, contact = $3 WHERE supplier_id = $4",
    [name, address, contact , id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Suppliers Updated Successfully!");
    }
  );
};

const deleteSupplier = (req, res) => {
  const id = req.params.id;
  pool.query(
    "DELETE FROM suppliers WHERE supplier_id = $1",
    [id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Supplier Deleted Successfully!");
    }
  );
};

module.exports = {
  getSuppliers,
  getSupplierById,
  addSupplier,
  editSupplier,
  deleteSupplier
};
