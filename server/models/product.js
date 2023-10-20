const mongoose=require("mongoose")

const productSechema= new mongoose.Schema({
    productName: String,
    productPrice: Number,
    productQuantity:Number,
    productDescription:String,
})

const productModel=mongoose.model("product",productSechema)
module.exports = productModel;