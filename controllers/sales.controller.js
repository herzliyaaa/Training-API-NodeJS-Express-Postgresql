const pool = require("../config/db.config");

const addSalesTransaction = (req, res) => {
  const { quantity, cost, barcode, customer_id } = req.body;
  pool.query(
    "INSERT INTO sales (quantity, cost, barcode, customer_id, transaction_date) VALUES ($1, $2, $3, $4 , localtimestamp)",
    [quantity, cost, barcode, customer_id],
    (error, results) => {
      if (error) {
        res.json("Error! huehue")
      };
      res.status(200).json("Sales Transaction Successful!");
    }
  );
}



const getTotalDailySales = (req, res) => {
  pool.query(
    'SELECT SUM(quantity * cost) AS SalesForTodaysVideo FROM "sales" WHERE "transaction_date"::DATE = CURRENT_DATE',
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const getWeeklyRevenue = (req, res) => {
  pool.query(
    '',
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};



module.exports = {
  addSalesTransaction
  // getTotalDailySales,
  // getWeeklyRevenue
  // getWeeklyCustomers,
};
