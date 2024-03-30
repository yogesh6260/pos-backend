const Customers = require("../models/Customer.model");

// get customers
const getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await Customers.find();
    res.status(200).send(allCustomers);
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

// create customer
const createCustomer = async (req, res) => {
  try {
    const newCustomer = new Customers(req.body);
    await newCustomer.save();
    res.status(201).send("Customer Created Successfully!");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

module.exports = { getAllCustomers, createCustomer };
