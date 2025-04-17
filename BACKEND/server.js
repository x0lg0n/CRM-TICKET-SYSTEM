const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const dotenv= require('dotenv');
const userRoutes= require('./routes/userRoutes');
const postRoutes= require('./routes/ticketRoutes');
dotenv.config();
const app= express();
app.use(cors());
app.get('/', (req, res) => {
    res.send('API is running...');
})
app.listen(5000);