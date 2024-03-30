const express = require("express");
const {
  getAllCustomers,
  createCustomer,
} = require("../controllers/Customer.controller");

const router = express.Router();

// routes

// Method -> GET
// Route -> /api/v1/customer/details/
// Controller -> getAllCustomers
// Params -> None
// Visibility -> Public
router.get("/details", getAllCustomers);

// Method -> POST
// Route -> /api/v1/customer/new/
// Controller -> createCustomer
// Params -> None
// Visibility -> Public
router.post("/new", createCustomer);

module.exports = router;
