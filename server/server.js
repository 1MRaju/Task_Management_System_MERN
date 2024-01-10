const express = require('express');
const cors = require('cors');
require('dotenv/config');
const mongoose = require('mongoose');
const taskRouter = require('./routes/taskRoutes');

const app = express();

//mongoDB connection
mongoose.connect(process.env.MONGODB_URL);

// middlewares
app.use(express.json());
app.use(cors());

//APIs
app.use('/api/tasks', taskRouter);

//PORT
const PORT = process.env.PORT || 8080;

//server
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
});




