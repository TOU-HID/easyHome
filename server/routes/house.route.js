const express = require('express');
const router = express.Router();
const houseController = require('../controllers/house.controller');
const authMiddleware = require('../middlewares/auth');

// get all
router.post('/advertise/create', houseController.createAdvertise);
router.get('/advertise/getAll', houseController.getAllHouses);
router.get('/advertise/:id', houseController.getHouseById);
router.put('/advertise/:id', houseController.updateHouseById);
router.put('/advertise/rating/:id', houseController.rateHouseById);
router.put('/advertise/booking/:id', houseController.bookHouseById);
router.put(
  '/advertise/booking/reject/:id',
  houseController.rejectBookingRequest
);
router.put(
  '/advertise/booking/accept/:id',
  houseController.acceptBookingRequest
);
router.delete('/advertise/:id', houseController.deleteHouseById);

// get one
// edit
// delete

module.exports = router;
