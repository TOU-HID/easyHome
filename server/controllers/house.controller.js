const House = require('../models/house.schema');
const cloudinary = require('../utils/cloudinary');

const createAdvertise = async (req, res) => {
  const { housename, image } = req.body;
  const house = await House.findOne({ housename });
  if (house) {
    res
      .status(401)
      .send({ error: '401', message: 'This house is already exists' });
  } else {
    try {
      let images = [...req.body.image];
      let imagesBuffer = [];

      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.uploader.upload(images[i], {
          folder: 'houses',
          // width: 1920,
          // crop: "scale"
        });
        imagesBuffer.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }

      req.body.image = imagesBuffer;
      const newHouse = new House({
        ...req.body,
      });
      const houseRes = await newHouse.save();
      res.status(201).send({ data: houseRes, message: 'Post Successfully' });
    } catch (error) {
      console.log(error);
    }
  }
};
const getAllHouses = async (req, res) => {
  try {
    const allHouse = await House.find();
    res.status(200).send(allHouse);
  } catch (error) {
    console.log(error);
  }
};
const getHouseById = async (req, res) => {
  const houseId = req.params.id;
  try {
    const selectedHouse = await House.findById(houseId);
    res.status(200).send(selectedHouse);
  } catch (error) {
    console.log(error);
  }
};
const updateHouseById = async (req, res) => {
  const houseId = req.params.id;
  try {
    const updatedHouse = await House.findByIdAndUpdate(houseId, req.body, {
      new: true,
    });
    res.status(200).send(updatedHouse);
  } catch (error) {
    console.log(error);
  }
};
const deleteHouseById = async (req, res) => {
  // console.log(req.params.id);
  const houseId = req.params.id;
  try {
    const deletedHouse = await House.findByIdAndDelete(houseId);
    res.status(200).send({
      status: '200',
      message: 'Deleted Successfully',
      id: houseId,
    });
  } catch (error) {
    console.log(error);
  }
};

const rateHouseById = async (req, res) => {
  const houseId = req.params.id;
  try {
    const updatedHouse = await House.findByIdAndUpdate(
      houseId,
      {
        $push: {
          rating: req.body,
        },
      },
      {
        new: true,
      }
    );
    // res.status(200).send(updatedHouse.rating);
    res.status(200).send({ status: '200', message: 'Rating successful' });
  } catch (error) {
    console.log(error);
  }
};
const bookHouseById = async (req, res) => {
  // const houseId = req.params.id;
  const houseId = req.params.id;
  try {
    const findHouse = await House.findById(houseId);
    let isPresent = false;

    // Can remove it later
    // if (findHouse.bookings.length === 0) {
    //   console.log('Empty');
    //   await House.findByIdAndUpdate(
    //     houseId,
    //     {
    //       $push: {
    //         bookings: req.body,
    //       },
    //     },
    //     {
    //       new: true,
    //     }
    //   );
    //   res.status(200).send({ status: '200', message: 'Bookign successful' });
    // }

    for (const elem of findHouse.bookings) {
      if (elem.bookerid === req.body.bookerid) {
        isPresent = true;
        break;
        // await House.findByIdAndUpdate(
        //   houseId,
        //   {
        //     $push: {
        //       bookings: req.body,
        //     },
        //   },
        //   {
        //     new: true,
        //   }
        // );
        // res.status(200).send({ status: '200', message: 'Booking successful' });
      }
    }
    if (!isPresent) {
      await House.findByIdAndUpdate(
        houseId,
        {
          $push: {
            bookings: req.body,
          },
        },
        {
          new: true,
        }
      );
      res.status(200).send({ status: '200', message: 'Bookign successful' });
    } else {
      // throw new Error('cannot insert');
      res.send('Cannot insert');
    }
  } catch (error) {
    console.log(error);
  }
};
const rejectBookingRequest = async (req, res) => {
  // const houseId = req.params.id;
  const houseId = req.params.id;
  try {
    // const findHouse = await House.findById(houseId);

    await House.findByIdAndUpdate(
      houseId,
      {
        $pull: {
          bookings: { bookerid: req.body.bookerid },
        },
      },
      {
        new: true,
      }
    );

    // res.status(200).send(updatedHouse.bookings);
    res.status(200).send({ status: '200', message: 'rejected successfully' });

    // getAllHouses()
  } catch (error) {
    console.log(error);
  }
};
const acceptBookingRequest = async (req, res) => {
  const houseId = req.params.id;
  try {
    const response = await House.updateOne(
      {
        _id: houseId,
        'bookings.bookerid': req.body.bookerid,
      },
      {
        $set: {
          'bookings.$.bookingstatus': 'accepted',
        },
      }
    );

    res.send(response);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createAdvertise,
  getAllHouses,
  getHouseById,
  updateHouseById,
  deleteHouseById,
  rateHouseById,
  bookHouseById,
  rejectBookingRequest,
  acceptBookingRequest,
};
