const connection=require('../utils/connection');
const express=require('express');
const productRouter=express.Router();
const category=require('../models/product_category');
const subcategory=require('../models/product_sub_category');
const payment=require('../models/payment');
const products=require('../models/products');


//retrieving all products
productRouter.get('/allproducts',(req,res,next)=>{
    products.find(function(err,products){
        res.json(products);
    })
});


//retrieving all products of a particular category doesnt work
productRouter.get('/products',(req,res,next)=>{
    var category_id=null;
    var subcategory_id=null;
    category.find(function(err,category)
    {
        for (var i=0; i<category.length; i++){

            if(category[i]['category_name']==req.query.category_name)
            {
                category_id=category[i]['category_Id'];
                break;
            }
        }
       // res.json({"id":category_id});

    });
    products.find(function(err,products){
        
        subcategory.find(function(err,subcategory)
        {
            for (var i=0; i<subcategory.length; i++){
            
                if(subcategory[i]['category_Id']==category_id)
                { 
                      subcategory_id= subcategory[i]['subcategory_Id'];
                    
                    for (var j=0; j<products.length; j++){
                       
                        if(products[j]['subcategory_Id']=="1234")
                        {
                            res.json(products[j]);
                            break;
                        }
                        else{
                        res.send("Not Found");
                        break;
                        }
                    }
                    break;

                }
            }
            });

     });
});


productRouter.post('/category',(req,res,next)=>{
    let newCategory=new category({
        category_Id:req.body.category_Id,
        category_name:req.body.category_name,
        categoryDescription:req.body.categoryDescription
    })
    newCategory.save((err,category)=>{
        if(err)
        {
            res.json({msg:'Failed to add category'+err});
        }
        else{
            res.json({msg:'Category added successfully'});
        }
    });
});


productRouter.post('/subcategory',(req,res,next)=>{
    let newSubCategory=new subcategory({
        category_Id:req.body.category_Id,
        subcategory_Id:req.body.subcategory_Id,
        subcategory_name:req.body.subcategory_name,
        subcategoryDescription:req.body.subcategoryDescription
    })
    newSubCategory.save((err,subcategory)=>{
        if(err)
        {
            res.json({msg:'Failed to add Subcategory'+err});
        }
        else{
            res.json({msg:'Subcategory added successfully'});
        }
    });
});


productRouter.post('/products',(req,res,next)=>{
    let newProduct=new products({
        product_Id:req.body.product_Id,
        subcategory_Id:req.body.subcategory_Id,
        product_name:req.body.product_name,
        category_id:req.body.category_id,
        Availability:req.body.Availability,
        Size:req.body.Size,
        productDescription:req.body.productDescription
    })
    newProduct.save((err,products)=>{
        if(err)
        {
            res.json({msg:'Failed to add ProductDetails'+err});
        }
        else{
            res.json({msg:'ProductDetails added successfully'});
        }
    });
});


productRouter.post('/paymentdetails',(req,res,next)=>{
    let newpayment=new payment({
        payment_Id:req.body.payment_Id,
        payment_type:req.body.payment_type,
        allowed:req.body.allowed
    })
    newpayment.save((err,payment)=>{
        if(err)
        {
            res.json({msg:'Failed to add paymentdetails'+err});
        }
        else{
            res.json({msg:'paymentdetails added successfully'});
        }
    });
});
module.exports=productRouter;