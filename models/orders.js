const mongoose=require('mongoose');
const OrdersSchema=mongoose.Schema({
    order_Id:{
        type:String,
        required:true
    },
    customer_Id:{
        type:String,
        required:true
    },
     order_number:{
        type:String,
        required:true
    },
    payment_Id:{
        type:String,
        required:true
    },
   
    orderdate:{
        type:Date,
        required:true
    },
    shipdate:{
        type:Date,
        required:true
    },
    paymentdate:{
        type:Date,
        required:true
    },
    transaction_status:{
        type:String,
        required:true
    },
   

});

const Orders=module.exports=mongoose.model('Orders',OrdersSchema);