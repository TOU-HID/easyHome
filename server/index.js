const express = require('express');
const cors = require('cors');
const router = require('./routes/user.route');
const app = express();
const PORT = 3001;
const connect = require('./models/db.connection');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
