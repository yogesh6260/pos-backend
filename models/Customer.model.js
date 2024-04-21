const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
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
  },
  { timestamps: true }
);

const Customers = mongoose.model("Customers", customerSchema);
module.exports = Customers;
