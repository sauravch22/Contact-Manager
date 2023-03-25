const express = require("express");
const errorhandler = require("./middleware/errorHandler");
const connectDb = require("./Config/dbConnection");
const dotenv = require("dotenv").config();
connectDb()
const app = express();

const port = process.env.PORT || 8080;

app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorhandler)
app.listen(port, () =>{
    console.log(`server running on port ${port}`);
})