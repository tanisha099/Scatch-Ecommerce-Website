const mongoose = require("mongoose");

const productSchema =  mongoose.Schema({
    image: Buffer,
    name: String,
    price: Number,
    discount:{
        type: Array,
        default:0,
    },
   bgcolor: String,
   panelcolor: String,
   textcolor: String,
});
module.exports = mongoose.model("productSchema",productSchema);