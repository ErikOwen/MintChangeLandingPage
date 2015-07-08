var express = require('express');
var router = express.Router();
var path    = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing', {});
});

/* GET photos page. */
router.post('/', function(req, res) {
	console.log("\n\n\n    ****New email: " + req.body.email + " ****\n\n\n");

	// var nodemailer = require('nodemailer');

	// // create reusable transporter object using SMTP transport
	// var transporter = nodemailer.createTransport({
	//     service: 'Gmail',
	//     auth: {
	//         user: 'emailer@jelo.com',
	//         pass: 'JeloEmailer'
	//     }
	// });

	// // NB! No need to recreate the transporter object. You can use
	// // the same transporter object for all e-mails

	// // setup e-mail data with unicode symbols
	// var mailOptions = {
	//     from: 'emailer@jelo.com', // sender address
	//     to: 'Erik_Owen@intuit.com, Kevin_Pham@intuit.com, Kevin_Feutz@intuit.com, Joseph_Sarjeant@intuit.com',
	//     subject: 'New Mint Change User!', // Subject line
	//     text: req.body.email // plaintext body
	// };

	// transporter.sendMail(mailOptions, function(error, info){
	//     if(error){
	//         console.log(error);
	//     }
	//     else{
	//         console.log('Message sent: ' + info.response);
	//         res.send(200).redirect("/");
	//     }
	// });


	res.redirect("/");
});

module.exports = router;