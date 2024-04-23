const express = require("express");
const {
  getAllBills,
  createBill,
  updateBill,
  importBills,
  deleteBill,
  deleteAllBills,
} = require("../controllers/Bill.controller");

const router = express.Router();

// routes

// Method -> GET
// Route -> /api/v1/bill/details
// Controller -> getAllBills
// Params -> None
// Visibility -> Public
router.get("/details", getAllBills);

// Method -> POST
// Route -> /api/v1/bill/new
// Controller -> createBill
// Params -> None
// Visibility -> Public
router.post("/new", createBill);

// Method -> POST
// Route -> /api/v1/bill/import
// Controller -> importBills
// Params -> None
// Visibility -> Public
router.post("/import", importBills);

// Method -> PUT
// Route -> /api/v1/bill/edit/:id
// Controller -> updateBill
// Params -> id
// Visibility -> Public
router.put("/edit/:id", updateBill);

// Method -> DELETE
// Route -> /api/v1/bill/delete/:id
// Controller -> deleteBill
// Params -> id
// Visibility -> Public
router.delete("/delete/:id", deleteBill);

// Method -> DELETE
// Route -> /api/v1/bill/deleteAll
// Controller -> deleteAllBills
// Params -> None
// Visibility -> Public
router.delete("/deleteAll", deleteAllBills);

module.exports = router;
