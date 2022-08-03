const pool = require("../config/db.config");

const getTotalDailySales = (req, res) => {
  pool.query(
    'SELECT SUM("total") FROM "sales" WHERE "transaction_date"::DATE = CURRENT_DATE',
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

const getWeeklyCustomers = (req, res) => {
  pool.query(
    '',
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getTotalDailySales,
  getWeeklyRevenue,
  getWeeklyCustomers,
};
