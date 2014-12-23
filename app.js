var express      = require('express');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var limits       = require('limits');
var mcapi        = require('./node_modules/mailchimp-api/mailchimp');

var routes = require('./routes/index');
var email  = require('./routes/email');
var mailchimp  = require('./routes/mailchimp')

var app = express();

// set MailChimp API key here
mc = new mcapi.Mailchimp('6f84dfb8b1ce257abbf566d9e134787a-us9');

//Limits configuration
var limits_config = {
	enable        : true,
	file_uploads  : true,
	post_max_size : 1048580 //1MB
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public/images/favicons/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.use(limits(limits_config)); // limit size of uploads to lessen the impact of DoS attempts
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/lists/:id/subscribe', mailchimp.subscribe);
app.post('/email/freelance', email.inquiry);
app.use('/', routes);

// We do use this error handler. The other one we don't have dev env set up so it's currently not in use

/// error handlers

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// Have a catch all on the route page so this one isn't needed
/// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});*/

module.exports = app;
