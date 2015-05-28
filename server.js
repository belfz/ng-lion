var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('views', path.join(__dirname, 'src'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'src'), {index: false}));

app.get('/', function (req, res) {
	res.render('index.html');
});

/*
 * Server
 *
 */
app.set('port', process.env.NG_LION || 1221);

var server = app.listen(app.get('port'), function () {
	console.log('ng-lion');
});