const mongoose=require('mongoose');
//mongoose.connect('mongodb://localhost:27017/ProductDB');
mongoose.connect('mongodb://localhost:27017/ProductDB',
                      { 
                          useNewUrlParser: true,
                          useUnifiedTopology: true,
                          useFindAndModify : false 
                      }
                );
const Schema=mongoose.Schema;

var NewProductSchma=new Schema({
    productId:Number,
    productName:String,
    productCode:String,
    releaseDate:String,
    discription:String,
    price:Number,
    starRating:Number,
    ImageUrl:String

});
var Productdata=mongoose.model('product',NewProductSchma);

module.exports=Productdata; 