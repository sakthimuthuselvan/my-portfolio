const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors()); // Allow all origins for simplicity; you may want to restrict it to specific origins in production
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    console.log(req.body);
    const { user_name, user_email, subject, text } = req.body;
    console.log();
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sakthimuthuselvan531@gmail.com',
            pass: process.env.EMAIL
        }
    });

    const mailOptions = {
        from: 'sakthimuthuselvan531@gmail.com',
        to: "sakthimuthuselvan531@gmail.com",
        subject: subject,
        html:` <html>
        <head>
          <style>
            /* Add your custom CSS styles here */
          </style>
        </head>
        <body>
          <p>User Name: <b>${user_name}</b></p>
          <p>User Email: <b>${user_email}</b></p>
          <br/>
          <p>${text}</p>
        </body>
      </html>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
            res.status(500).send('Error occurred while sending email');
        } else {
            console.log('Email sent:', info.response);
            res.send('Email sent successfully');
        }
    });
});

const PORT = process.env.PORT || 3001;
console.log(PORT);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
