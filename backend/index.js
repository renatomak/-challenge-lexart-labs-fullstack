const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(express.json());


app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
