const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/adminproducts", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connecting to the DB"))
    .catch( error => console.log("Something went wrong when connecting to the DB "+error) );