const connection=require('../utils/connection');
const express=require('express');
const customerRouter=express.Router();
const customers=require('../models/customers');

//retrieving all customers
customerRouter.get('/customerdetails',(req,res,next)=>{
    customers.find(function(err,customers){
        if(err)
        {
          res.send("error");
        }
        else{
        res.json(customers);
        }
    })
});


//retrieving a particular customer detail
customerRouter.get('/customerdetail',(req,res,next)=>{
    customers.find(function(err,customers){
        var employees = {
            accounting: []
        };
    for (var i=0; i<customers.length; i++){
        
        if(customers[i]['email']==req.query.email)
             {
                 //res.json(customers[i]);
                 //break;
                 employees.accounting.push(customers[i]);
             }
     }
     res.json(employees); })
});

//registering a user
customerRouter.post('/customerdetails',(req,res,next)=>{
    let newcustomer=new customers({
        customer_Id:ID(),
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        address1:req.body.address1,
        address2:req.body.address2,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password
    })
    newcustomer.save((err,customers)=>{
        if(err)
        {
            res.json({msg:'Failed to add customer details'+err});
        }
        else{
            res.json({msg:'customer details added successfully'});
        }
    });
});
var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, 9);
  };
module.exports=customerRouter;
