const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/config");

// dotenv config
dotenv.config();

// db config
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev")); // only for development use

// routes
app.use("/api/v1/customer", require("./routes/Customer.route"));

// port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
