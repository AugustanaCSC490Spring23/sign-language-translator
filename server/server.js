const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI);
mongoose.set("strictQuery", false);

// Check currently in prod or dev mode
console.log(`In mode: ${process.env.NODE_ENV}`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to MongoDB successfully");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
