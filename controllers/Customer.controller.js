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

// import/add customers
const importCustomers = async (req, res) => {
  try {
    const docs = req.body;
    const result = await Customers.insertMany(docs, { ordered: true });
    console.log(`${result.length} Entries were inserted`);
    res.status(201).json({
      message: "Document Uploaded Successfully!",
      result: result,
    });
  } catch (error) {
    res.status(400).send("error", error);
    console.log(error);
  }
};

// edit customer details
const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customers.findById(id); // Check if customer exists
    if (!customer) {
      res.status(404).send("Customer not found"); // Handle "not found" case
      return;
    }
    const updatedCustomer = await Customers.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        contact: req.body.contact,
        class: req.body.class,
      },
      { new: true }
    ); // Return updated customer document

    res.status(200).json({
      message: "Customer Updated Successfully!",
      customer: updatedCustomer,
    });
  } catch (error) {
    console.error("Error updating customer:", error); // Log detailed error
    res.status(500).json({ error: "Internal server error" }); // Send generic error message
  }
};

// delete customer
const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customers.findById(id); // Check if customer exists
    if (!customer) {
      res.status(404).send("Customer not found"); // Handle "not found" case
      return;
    }
    await Customers.findByIdAndDelete(id);
    res.status(200).json({
      message: "Customer Deleted Successfully!",
    });
  } catch (error) {
    console.error("Error deleting customer:", error); // Log detailed error
    res.status(500).json({ error: "Internal server error" }); // Send generic error message
  }
};

// delete all customers
const deleteAllCustomers = async (req, res) => {
  const selectedCustomerIds = req.body;
  try {
    if (selectedCustomerIds && selectedCustomerIds.length > 0) {
      await Customers.deleteMany({ _id: { $in: selectedCustomerIds } });
      res.status(200).json({
        message: "Selected customers deleted successfully!",
      });
    } else {
      await Customers.deleteMany({});
      res.status(200).json({
        message: "All customers deleted successfully!",
      });
    }
  } catch (error) {
    console.error("Error deleting customers:", error); // Log detailed error
    res.status(500).json({ message: "Error deleting customers!" }); // Send generic error message
  }
};

module.exports = {
  getAllCustomers,
  createCustomer,
  importCustomers,
  updateCustomer,
  deleteCustomer,
  deleteAllCustomers,
};
