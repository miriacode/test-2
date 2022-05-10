const express = require ("express");
const app = express();
const cors = require("cors");

//To use JSON
app.use( express.json(), express.urlencoded({ extended: true }) );

//Allows us to acces from a different port
app.use(
    cors({
        //URL de front end
        origin: "http://localhost:3000"
    })
);


//Initialize BD
require("./config/mongoose.config");

//Importing Rutas
const myRoutes = require("./routes/product.routes");
myRoutes(app);

//Ejecutamos server
app.listen(8000, () => console.log("Server is ready!"));