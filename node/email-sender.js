const nodemailer = require('nodemailer');
const mailOptions = {
    from: 'bdiri.amine08@gmail.com', 
    to: 'bdiri.amine08@gmail.com', 
    subject: 'Test Email', 
    text: 'This is a test email sent from Node.js using nodemailer.' 
};
const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "bdiri.amine08@gmail.com",
      pass: "fwui hjzt epfx tpai",
    },
  });

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});