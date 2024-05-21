const mongoose=require("mongoose");
const recommendationSchema = new mongoose.Schema({
  user_id:String,
  recommendcities:Array,
});
module.exports= mongoose.model("recommendation", recommendationSchema)