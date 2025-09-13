require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const { resolve } = require('path');

const app = express();
app.use(express.json());
const mongoUri = process.env.MONGO_URI||'mongodb://localhost:27017/inventoryDB';

const port = process.env.PORT || 3000;
mongoose.connect(mongoUri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
 })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log("Error connecting to MongoDB:", err));
app.use(express.static('static'));
 

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
