const express = require('express');
const cors = require('cors');
const router = require('./routes/index.routes.js')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", router)

app.get('/', (req,res) => {
    res.send({name: "JAMES"})
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})