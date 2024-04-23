const express = require("express");
const {
  getAllCustomers,
  createCustomer,
  importCustomers,
  updateCustomer,
  deleteCustomer,
  deleteAllCustomers,
} = require("../controllers/Customer.controller");

const router = express.Router();

// routes

// Method -> GET
// Route -> /api/v1/customer/details
// Controller -> getAllCustomers
// Params -> None
// Visibility -> Public
router.get("/details", getAllCustomers);

// Method -> POST
// Route -> /api/v1/customer/new
// Controller -> createCustomer
// Params -> None
// Visibility -> Public
router.post("/new", createCustomer);

// Method -> POST
// Route -> /api/v1/customer/import
// Controller -> importCustomers
// Params -> None
// Visibility -> Public
router.post("/import", importCustomers);

// Method -> PUT
// Route -> /api/v1/customer/edit/:id
// Controller -> updateCustomer
// Params -> id
// Visibility -> Public
router.put("/edit/:id", updateCustomer);

// Method -> DELETE
// Route -> /api/v1/customer/delete/:id
// Controller -> deleteCustomer
// Params -> id
// Visibility -> Public
router.delete("/delete/:id", deleteCustomer);

// Method -> DELETE
// Route -> /api/v1/customer/deleteAll
// Controller -> deleteAllCustomers
// Params -> None
// Visibility -> Public
router.delete("/deleteAll", deleteAllCustomers);

module.exports = router;
