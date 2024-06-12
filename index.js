const express = require("express");
const app = express();
const PORT = 8080;
require("./src/db/conn");
const router = require("./src/routers/router");

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
