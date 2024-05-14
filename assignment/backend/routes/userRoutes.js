// backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const transporter =require('../config/nodeMailerConfi');

// User routes

router.post('/register', registerController.registerUser);
router.post('/login',registerController.loginUser);
router.get('/register',registerController.edit);
router.delete('/register/:id', registerController.Delete);
router.put('/register/:id', registerController.Update);
router.get("/userdetails/:id",registerController.userDetails);

//route to hande from submittion

router.post('/send-mail', (req, res) => {
    const { to, from, subject, startDate, endDate, name, mobileNumber, message } = req.body;

    // Email content
    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: `
        Start Date: ${startDate}
        End Date: ${endDate}
        Name: ${name}
        Mobile Number: ${mobileNumber}
        Message: ${message}
      `
    };
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error occurred:', error);
        res.status(500).send('Error occurred while sending email.');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully!');
      }
    });
  });
module.exports = router;
