const pool = require("../config/db.config");

const addDeliveryTransaction = (req, res) => {
  const { quantity, cost, barcode, supplier_id } = req.body;
  pool.query(
    "INSERT INTO delivery (quantity, cost, barcode, supplier_id, transaction_date) VALUES ($1, $2, $3, $4 , localtimestamp)",
    [quantity, cost, barcode, supplier_id],
    (error, results) => {
      if (error) {
        res.json("Error! huehue")
      };
      res.status(200).json("Delivery Transaction Successful!");
    }
  );
}


const getTotalDailyDeliveries = (req, res) => {
  pool.query(
    'SELECT COUNT (barcode) from items where created_at ::date = CURRENT_DATE; ',
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};



module.exports = {
  addDeliveryTransaction,
  getTotalDailyDeliveries
  // getWeeklyRevenue
  // getWeeklyCustomers,
};
