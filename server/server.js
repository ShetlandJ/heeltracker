const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded()); //Parse URL-encoded bodies


const db = require('./models');

db.sequelize.sync()
    .then((req) => {
        app.listen(port, () => {
            console.log(`Server is running on ${port}`);
        })
    })

const wrestlerRoutes = require('./routes/wrestlers.routes.js');

app.use("/api/wrestlers", wrestlerRoutes)

// app.get('/', (req,res) => {
//     res.send({name: "JAMES"})
// })