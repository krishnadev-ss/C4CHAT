const express = require("express");
const app = express();
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const userRoutes = require("./Routes/userRoutes");
const connectDB = require("./config/db");


dotenv.config();
connectDB()
app.use(express.json()); // to accept json data
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Api is running successfully!");
});

app.use('/api/user', userRoutes);

app.listen(PORT, console.log(`server started on PORT ${PORT}`));




