const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rootRoute = require("./routes/rootRoute");
const productRoute = require("./routes/productRoute");
const connectDB = require("./config/db");



const PORT = process.env.PORT || 6000 || 8000;
// const PORT = 8000;
const app = express();
connectDB();


// app.get("/", (req, res)=> {
//     res.send("api is working");
// });

app.get("/", rootRoute)

app.use("/fashiontrends", productRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`.bgBlue.white);
})
