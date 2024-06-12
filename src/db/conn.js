const mongoose = require("mongoose");
const DBURL =
  "mongodb+srv://root:root@movies-listing.wwbwufi.mongodb.net/rest-api?retryWrites=true&w=majority&appName=Movies-Listing";

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Connection Error", error);
  });
