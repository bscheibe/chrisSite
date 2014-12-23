exports.inquiry = function (req, res) {
    var nodemailer   = require('nodemailer');

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'email',
            pass: 'password'
        }
    });

    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'Brent Scheibelhut ✔ <brentscheibelhut.com@gmail.com>', // sender address
        to: 'brent@scheibelhut.com', // list of receivers
        subject: 'Freelance Work Inquiry', // Subject line
        text: 
        'Name:' + req.body.name + 
        'Phone:' + req.body.phone +
        'Email:' + req.body.email +
        'Description:' + req.body.description, // plaintext body
        html: 
        '<h2>Freelance Inquirer Contact Info</h2><br><strong>Name: </strong>' + req.body.name + 
        '<br><strong>Phone: </strong>' + req.body.phone + 
        '<br><strong>Email: </strong>' + req.body.email +
        '<br><strong>Description: </strong>' + req.body.description + '</br>'// html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
        res.redirect('/');
    });
};