const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const morgan = require('morgan');


const server = express();
server.use(express.json());

server.use(helmet());
server.use(cors());
server.use(morgan("dev"));

const carsRouter = require('./cars/cars-router');
server.use('/api/cars',carsRouter);

server.get('/', (req, res) => {
    res.send("Server's Up Boss")
});
module.exports=server