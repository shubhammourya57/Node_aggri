const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Propertys = require('./routes/property')
// const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(path.join(__dirname, '')))
// app.use('/img',express.static('img'))

app.use('/',Propertys)

mongoose.connect('mongodb+srv://shubh:jaishriram@cluster0.kkc8rbl.mongodb.net/mac')
.then(result=> {
  app.listen(3000);
  console.log('Database connected');
})
.catch(err => console.log(err));