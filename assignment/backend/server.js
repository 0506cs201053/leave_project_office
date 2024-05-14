// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const fs= require ('fs');
const connection = require('./db/dbconfig');

const emailConnection=require('./db/emailconfig.js');
const router=require("./routes/userRoutes.js");
const app = express();
const port = 4000;

// Add this middleware to configure sessions
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Adjust as needed
}));


// Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/",router);

// Create register table
connection.query(fs.readFileSync('./db/register.sql').toString(), (error, results) => {
  if (error) {
    console.error('Error creating table:', error);
    return;
  }
  console.log('Table created successfully');
});


//Create email send data
emailConnection.query(fs.readFileSync('./db/emailData.sql').toString(),(error,results)=>{
  if (error) {
    console.error('Error creating table:', error);
    return;
  }
  console.log('Table created successfully');
})

app.use("/",router);
// Routes
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
