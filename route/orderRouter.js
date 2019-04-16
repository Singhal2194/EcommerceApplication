const connection=require('../utils/connection');
const express=require('express');
const orderRouter=express.Router();
const orders=require('../models/orders');
const orderdetails=require('../models/orderdetails');

//retrieving all orders of a particular customer
orderRouter.get('/orders',(req,res,next)=>{
    orders.find(function(err,orders){
        var employees = {
            accounting: []
        };

    for (var i=0; i<orders.length; i++){
        
        if(orders[i]['customer_Id']==req.query.customer_Id)
             {
                employees.accounting.push(orders[i]);

             }
     }
     res.json(employees); })
});


orderRouter.post('/orders',(req,res,next)=>{
    let neworder=new orders({
        order_Id:orderID(),
        customer_Id:req.body.customer_Id,
        order_number:req.body.order_number,
        payment_Id:req.body.payment_Id,
        orderdate:req.body.orderdate,
        shipdate:req.body.shipdate,
        paymentdate:req.body.paymentdate,
        transaction_status:req.body.transaction_status
    })
    neworder.save((err,orders)=>{
        if(err)
        {
            res.json({msg:'Failed to add order '+err});
        }
        else{
            res.json({msg:'order added successfully'});
        }
    });
});

orderRouter.post('/orderdetails',(req,res,next)=>{
    let neworderdetails=new orderdetails({
        order_Id:orderID(),
        product_Id:req.body.product_Id,
        order_number:req.body.order_number,
        price:req.body.price,
        quantity:req.body.quantity,
        discount:req.body.discount,
        shipdate:req.body.shipdate,
        orderdetail_Id:req.body.orderdetail_Id,
        billdate:req.body.billdate
    })
    neworderdetails.save((err,orderdetails)=>{
        if(err)
        {
            res.json({msg:'Failed to add order details'+err});
        }
        else{
            res.json({msg:'order details added successfully'});
        }
    });
});

var orderID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return "OD"+Math.random().toString(36).substr(2, 9);
  };

  module.exports=orderRouter;