var express = require('express');
var router = express.Router();
var Bill = require('../app/models/Bill');
/* GET /bills listing. */
router.get('/', function(req, res, next) {
	console.log("reached");
  Bill.find(function (err, resp) {
    if (err){
		console.log("err"+err);
	}else{
		console.log("response success"+resp);
		res.json(resp);
	}
  });
});

/* POST /bills */
router.post('/', function(req, res, next) {
  Bill.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /bills/id */
router.get('/:id', function(req, res, next) {
  Bill.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /bills/:id */
router.put('/:id', function(req, res, next) {
  Bill.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
	console.log(req.body);
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /bills/:id */
router.delete('/:id', function(req, res, next) {
  Bill.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
