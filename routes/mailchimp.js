var mcapi = require('../node_modules/mailchimp-api/mailchimp');

/*
 * POST subscribe an email to a list in mailchimp
 */

exports.subscribe = function(req, res){
  mc.lists.subscribe({id: req.params.id, email:{email:req.body.email}}, function(data) {
      console.log('User subscribed successfully! Look for the confirmation email.');
      res.redirect('/');
    },
    function(error) {
      if (error.error) {
        console.log(error.code + ": " + error.error);
      } else {
        console.log('There was an error subscribing that user');
      }
      res.redirect('/');
    });
};