const express=require('express');
const ProductData=require('./src/model/Productdata.js');
var ObjectId=require('mongoose').Types.ObjectId;
const cors=require('cors');
var bodyparser=require('body-parser');

var app=new express();
app.use(cors());
app.use(bodyparser.json())


//Get product list
app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION');
    ProductData.find()
        .then(function(products){
            res.send(products);
    
        });
});

// Get single product by id
app.get('/products/:id',function(req, res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION');
    ProductData.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    });
});

// Add product
app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION');
    var product={
        productId:req.body.product.productId,
        productName:req.body.product.productName,
        productCode:req.body.product.productCode,
        releaseDate:req.body.product.releaseDate,
        discription:req.body.product.releaseDate,
        price:req.body.product.price,
        starRating:req.body.product.starRating,
        ImageUrl:req.body.product.ImageUrl,
    }
    var product=new ProductData(product);
    product.save();
});

//Update product
app.put('/update/:id',function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION');
    
    var product={
        productId:req.body.product.productId,
        productName:req.body.product.productName,
        productCode:req.body.product.productCode,
        releaseDate:req.body.product.releaseDate,
        discription:req.body.product.releaseDate,
        price:req.body.product.price,
        starRating:req.body.product.starRating,
        ImageUrl:req.body.product.ImageUrl,
    };
    console.log("Update Id :", req.params.id);
    console.log("Update details :", product);

    ProductData.findByIdAndUpdate(req.params.id,{$set:product}, (error, data) => {
        if (error) {
          return next(error);
          console.log(error)
        } else {
          res.json(data)
          console.log('Data updated successfully')
        }
      });
});

app.delete('/delete/:_id',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION');
    console.log(req.params._id);
    ProductData.findByIdAndRemove(req.params._id,(error, data) => {
        if (error) {
          return next(error);
          console.log(error)
        } else {
          res.json(data)
          console.log('Product removed');
        }
      });

});

app.listen(3000,function(){
    console.log('listning to port 3000');
    
});