// Nodemailer configuration

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'surajahirwar280@gmail.com',
      pass: 'fhwd nrtd ebgy nexx'
    }
  });

  module.exports=transporter;