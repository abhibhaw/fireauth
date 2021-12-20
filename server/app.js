require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
require("./config/db");
app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
