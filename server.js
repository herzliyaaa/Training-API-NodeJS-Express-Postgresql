const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const itemRoutes = require('./routes/item.route');
const customerRoutes = require('./routes/customer.route');
const supplierRoutes = require('./routes/supplier.route')
const app = express();


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.json({ message: "kssksksksk!" });
});



app.use(itemRoutes);
app.use(customerRoutes);
app.use(supplierRoutes);

app.use (function(err, req, res, next) {
  if (err) {
    console.log(err)
    res.sendStatus(400)
  }
})



const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
