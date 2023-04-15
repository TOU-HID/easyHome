const cloudinary = require('cloudinary').v2;

cloudinary.config({
  //   cloud_name: process.env.CLOUD_NAME,
  //   api_key: process.env.CLOUD_KEY,
  //   api_secret: process.env.CLOUD_KEY_SECRET,
  cloud_name: 'dqgdpbbtv',
  api_key: '154431722484511',
  api_secret: 'W-xTxwa5XgGcw6pdMZfJGKL991I',
});

module.exports = cloudinary;
