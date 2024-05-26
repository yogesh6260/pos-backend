const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const BillSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      unique: true,
      required: true,
    },
    contact: {
      type: String,
      unique: true,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    subtotal: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    billStatus: {
      type: Boolean,
      required: true,
    },
    receiptNumber: {
      type: String,
      required: true,
      unique: true,
      default: uuidv4,
    },
  },
  { timestamps: true }
);

const Bills = mongoose.model("Bills", BillSchema);
module.exports = Bills;
