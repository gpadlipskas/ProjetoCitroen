var express = require('express');
var router = express.Router();
var CollectionDomain = require('./collectionDomain');

router.get('/', function (req, res) {
	res.render('index');
});

router.get('/locais', function (req, res) {
	CollectionDomain.list('locais', function (err, result) {
		if (err) {
			res.send({
				err: err,
				result: result
			});
		} else {
			res.send({
				result: result
			});
		};
	});
});

router.post('/localId', function (req, res) {
	CollectionDomain.findById('locais', req.body._id, function (err, result) {
		if (err) {
			res.send({
				err: err,
				result: result
			});
		} else {
			res.send({
				result: result
			});
		};
	});
});

module.exports = router;