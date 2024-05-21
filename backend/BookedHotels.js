const mongoose = require("mongoose");
const BookedHotelsSchema = new mongoose.Schema({
  uid:String,
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
module.exports = mongoose.model("booked-hotels", BookedHotelsSchema)