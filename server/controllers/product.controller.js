const Product = require("../models/product.model");

module.exports.create_product = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        // .catch(error => res.json({message: "Something went wrong "+error}));
        .catch(error => res.status(400).json(error));
}

module.exports.get_all = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(error => res.json({message: "Something went wrong "+error}));
}

module.exports.get_product = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(error => res.json({message: "Something went wrong "+error}));
}

module.exports.update_product = (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true})
        .then(product => res.json(product))
        // .catch(error => res.json({message: "Something went wrong "+error}));
        .catch(error => res.status(400).json(error));
}

module.exports.delete_product = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(error => res.json({message: "Something went wrong "+error}));
}