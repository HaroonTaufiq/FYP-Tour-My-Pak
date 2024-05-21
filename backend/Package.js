  const mongoose = require("mongoose");
  const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    img: String,
    description: String,
    extraInfo: String,
    departure: String,
    arrival: String,
    maxPersons: String,
    cost: String,
    perk: String
  });
  module.exports = mongoose.model("packages", productSchema)