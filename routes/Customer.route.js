const express = require("express");
const {
  getAllCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
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

// Method -> PUT
// Route -> /api/v1/customer/edit/:id
// Controller -> updateCustomer
// Params -> None
// Visibility -> Public
router.put("/edit/:id", updateCustomer);

// Method -> DELETE
// Route -> /api/v1/customer/delete/:id
// Controller -> deleteCustomer
// Params -> None
// Visibility -> Public
router.delete("/delete/:id", deleteCustomer);

module.exports = router;
