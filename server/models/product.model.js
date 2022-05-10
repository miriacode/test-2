const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Name is required."],
        minLength: [2, "Name must be at least 2 characters long."]
    },
    price: Number,
    description: {
        type: String,
        required:[true, "Description is required."],
        minLength: [5, "Description must be at least 5 characters long."]
    }
}, {timestamps: true, versionKey: false});
//timestamps: creando campos de createdAt y updatedAt
//versonKey:false estamos eliminando el atributo _v

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;