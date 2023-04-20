const express = require('express');
const router = express.Router();

const dailyHouse = require('../controllers/dailyHouse.controller');
// get all
router.post('/dailyhouse/create', dailyHouse.createAdvertise);
router.get('/dailyhouse/getAll', dailyHouse.getAllHouses);
router.get('/dailyhouse/:id', dailyHouse.getHouseById);
router.put('/dailyhouse/:id', dailyHouse.updateHouseById);
router.put('/dailyhouse/rating/:id', dailyHouse.rateHouseById);
router.put('/dailyhouse/booking/:id', dailyHouse.bookHouseById);
router.put('/dailyhouse/booking/reject/:id', dailyHouse.rejectBookingRequest);
router.put('/dailyhouse/booking/accept/:id', dailyHouse.acceptBookingRequest);
router.delete('/dailyhouse/:id', dailyHouse.deleteHouseById);

// get one
// edit
// delete

module.exports = router;
