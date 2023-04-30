const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.route');
const houseRoute = require('./routes/house.route');
const dailyHouseRouter = require('./routes/dailyHouse.route');
const http = require('http');
const { Server } = require('socket.io');

const connect = require('./models/db.connection');
const { disconnect } = require('process');
require('dotenv').config();

const app = express();
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

const expressServer = http.createServer(app);
const io = new Server(expressServer, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
});
const PORT = 3001;

let onlineUsers = [];

const addUser = (userId, socketId) => {
  !onlineUsers.some((user) => user.userId === userId) &&
    onlineUsers.push({ userId, socketId });
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUsers.find((user) => user.userId === userId);
};

io.on('connection', (socket) => {
  console.log('New user connected');
  io.emit('firstEmit', 'Hello');

  socket.on('newUser', (userId) => {
    addUser(userId, socket.id);
  });
  socket.on('sendNotification', ({ sender, receiverId, message }) => {
    const receiver = getUser(receiverId);
    io.to(receiver.socketId).emit('getNotification', {
      sender,
      message,
    });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
    removeUser(socket.id);
  });
  console.log(onlineUsers);
});

expressServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
