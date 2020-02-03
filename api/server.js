const express = require('express')
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const carsRouter = require('../cars/cars-router.js');

const server = express;

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan("dev");

server.use('/api/cars',carsRouter);

server.get('/', (req, res) => {
    res.send("Server's Up Boss")
});