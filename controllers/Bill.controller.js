const Bills = require("../models/Bill.model");

// get bills
const getAllBills = async (req, res) => {
  try {
    const allBills = await Bills.find();
    res.status(200).json({
      data: allBills,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
    console.log(error);
  }
};

// create bill
const createBill = async (req, res) => {
  try {
    const { customerName, contact } = req.body;
    const BillExist = await Bills.findOne({
      $or: [{ name: customerName }, { contact: contact }],
    });
    if (!BillExist) {
      const newBill = new Bills(req.body);
      await newBill.save();
      res.status(201).json({
        data: newBill,
        message: "Bill Created Successfully!",
      });
    } else {
      console.log("Bill with customer name or contact already exist!");
      res.status(400).json({
        message: "Bill with customer name or contact already exist!",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
    console.log(error);
  }
};

// import/add bills
const importBills = async (req, res) => {
  try {
    const docs = req.body;
    const bulkOps = docs.map((doc) => ({
      updateOne: {
        filter: {
          $or: [{ customerName: doc.customerName }, { contact: doc.contact }],
        },
        update: { $setOnInsert: doc }, // Insert only if document doesn't exist
        upsert: true, // Create new document if no match is found
      },
    }));
    const result = await Bills.bulkWrite(bulkOps, { ordered: true });
    const upsertedCount = result.upsertedCount;
    console.log(`${upsertedCount} Entries were inserted`);
    if (upsertedCount !== 0) {
      res.status(201).json({
        message: "Document Uploaded Successfully!",
        result: result,
      });
    } else {
      res.status(400).json({
        message: "Duplicate Entries Found!",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
    console.log(error);
  }
};

// edit bill details
const updateBill = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bills.findById(id); // Check if Bill exists
    if (!bill) {
      res.status(400).json({
        message: "Bill not found!",
      });
    }
    const updatedBill = await Bills.findByIdAndUpdate(id, req.body, {
      new: true,
    }); // Return updated bill document

    res.status(200).json({
      message: "Bill Updated Successfully!",
      bill: updatedBill,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
    console.log(error);
  }
};

// delete bill
const deleteBill = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bills.findById(id); // Check if bill exists
    if (!bill) {
      res.status(400).json({
        message: "Bill not found!",
      });
    }
    await Bills.findByIdAndDelete(id);
    res.status(200).json({
      message: "Bill Deleted Successfully!",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
    console.log(error);
  }
};

// delete all bills
const deleteAllBills = async (req, res) => {
  const selectedBillIds = req.body;
  try {
    if (selectedBillIds && selectedBillIds.length > 0) {
      await Bills.deleteMany({ _id: { $in: selectedBillIds } });
      res.status(200).json({
        message: "Selected bills deleted successfully!",
      });
    } else {
      await Bills.deleteMany({});
      res.status(200).json({
        message: "All bills deleted successfully!",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
    console.log(error);
  }
};

module.exports = {
  getAllBills,
  createBill,
  importBills,
  updateBill,
  deleteBill,
  deleteAllBills,
};
