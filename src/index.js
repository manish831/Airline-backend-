const express = require("express");
// require("dotenv").config();

const {PORT} = require('./config/serverConfig.js');

const setupAndStartServer = async () => {
    // create a express() object.
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(process.env.PORT);
    });
};

setupAndStartServer();