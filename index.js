//Initializes environment variables
require('dotenv').config();

//Brings express.js to the application
const express = require('express');
const server = express();

//Calls and initializes a sequelize instance to handle database communication
const sequelize = require('./config/database'); // instância Sequelize

//Database table initialization section.
//Use require('./models/<MODEL_NAME>').sync() to create/update the table
require('./models/user-model').sync();
require('./models/permission-model').sync();

//Enables express.js to use JSON for the 
server.use(express.json());

//Router declaration 
//Sips from one main router that will connect to all other model based routers in a micro-service style
const mainRouter = require('./routers/main-router');
server.use('/', mainRouter);

//Authenticates DB and then launches express.js
sequelize.authenticate()
  .then(() => {
    console.log(`Successfully connected to DB on  ${process.env.DB_USER}@${process.env.DB_HOST}`);
    
    console.log(`Starting an Express.js application on host: ${process.env.DB_HOST}:${process.env.PORT}`);
    server.listen(process.env.PORT, () => {
      console.log(`Express.js application running on host: ${process.env.DB_HOST}:${process.env.PORT}`);
    });
  })
  .catch(err => console.error('Error initializing appplication:', err));