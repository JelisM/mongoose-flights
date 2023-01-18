var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controller/flights')

/* GET flights */
router.get('/', flightsCtrl.index)

// GET /flights/new
router.get('/new', flightsCtrl.new)
//GET /flights/:id (show functionallity)
router.get('/:id', flightsCtrl.show);
// POST /flights
router.post('/', flightsCtrl.create);



module.exports = router;
