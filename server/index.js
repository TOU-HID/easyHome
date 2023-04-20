const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.route');
const houseRoute = require('./routes/house.route');
const dailyHouseRouter = require('./routes/dailyHouse.route');
const app = express();
const PORT = 3001;
const connect = require('./models/db.connection');
require('dotenv').config();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(houseRoute);
app.use(dailyHouseRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
