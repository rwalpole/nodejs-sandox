var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'rob.walpole@talk21.com',
    pass: 'noodleS0up'
  }
});

var mailOptions = {
  from: 'rob.walpole@talk21.com',
  to: 'rob.walpole@devexe.co.uk',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});