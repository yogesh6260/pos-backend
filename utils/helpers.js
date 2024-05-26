// const Bills = require("../models/Bill.model");

// // Receipt No. Format ->  20240526001
// const getCurrentFormattedDate = () => {
//   const today = new Date();
//   const formattedDate =
//     today.getFullYear() +
//     (today.getMonth() + 1).toString().padStart(2, "0") +
//     today.getDate().toString().padStart(2, "0");
//   return formattedDate;
// };

// // let billNo = 0;
// // const generateReceiptNumber = async () => {
// //   // let billNo = 0;
// //   const formattedDate = getCurrentFormattedDate();
// //   let receiptno = await Bills.findOne(
// //     {},
// //     {},
// //     { sort: { createdAt: -1 } }
// //   ).select("receiptNumber -_id");
// //   if (receiptno) {
// //     receiptno = receiptno.receiptNumber;
// //     billNo = parseInt(receiptno.slice(-3));
// //   }
// //   billNo = billNo + 1;
// //   console.log(`${formattedDate + billNo.toString().padStart(3, "0")}`);
// //   return `${formattedDate + billNo.toString().padStart(3, "0")}`;
// // };

// // const generateSequenceReceiptNumber = () => {
// //   const formattedDate = getCurrentFormattedDate();
// //   billNo = billNo + 1;
// //   console.log(`${formattedDate + billNo.toString().padStart(3, "0")}`);
// //   return `${formattedDate + billNo.toString().padStart(3, "0")}`;
// // };

// module.exports = { generateReceiptNumber, generateSequenceReceiptNumber };
