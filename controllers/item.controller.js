const pool = require("../config/db.config");

const getItems = (req, res) => {
  pool.query("SELECT * FROM items ORDER BY created_at", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res.status(200).json(results.rows);
  });
};

const getItemById = (req, res) => {
  const barcode = req.params.id;
  pool.query(
    "SELECT * FROM items WHERE barcode = $1",
    [barcode],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
        res.status(200).json({ message: `Item ${barcode}`, data: results.rows});
    }
  );
};

const addItem = (req, res) => {
  const { barcode, name, quantity, cost } = req.body;
  pool.query(
    "INSERT INTO items (barcode, name, quantity, cost, created_at) VALUES ($1, $2, $3, $4 , localtimestamp)",
    [barcode, name, quantity, cost],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res
        .status(200)
        .json({ message: "Items Created Successfully!", data: req.body });
    }
  );
};

const editItem = (req, res) => {
  const barcode = req.params.id;
  const { name, quantity, cost } = req.body;
  pool.query(
    "UPDATE items SET name = $1, quantity = $2, cost = $3 WHERE barcode = $4",
    [name, quantity, cost, barcode],
    (error, results) => {
      if (error) {
        res.status(400).json(error.message);
      }
      res
        .status(200)
        .json({ message: "Item Updated Successfully!" , data: req.body});
    }
  );
};

const deleteItem = (req, res) => {
  const barcode = req.params.id;
  pool.query(
    "DELETE FROM items WHERE barcode = $1",
    [barcode],
    (error, results) => {
      if (error) {
        res.status(500).json(error.message || `Could not delete item with id ${barcode}`);
      }
      res
        .status(200)
        .json({ message: "Item Deleted Successfully!"});
    }
  );
};

const deleteAllItems = (req, res) => {
  pool.query("TRUNCATE TABLE items CASCADE", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }
    res
        .status(200)
        .json({ message: "All items were deleted!!"});
  });
};

const getTotalItems = (req, res) => {
  pool.query("SELECT COUNT(barcode) FROM items", (error, results) => {
    if (error) {
      res.status(400).json(error.message);
    }

    res.status(200).json(results.rows);
  });
};

module.exports = {
  getItems,
  getItemById,
  getTotalItems,
  addItem,
  editItem,
  deleteItem,
  deleteAllItems,
};
