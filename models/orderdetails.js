const mongoose=require('mongoose');
const OrderdetailsSchema=mongoose.Schema({
    order_Id:{
        type:String,
        required:true
    },
    product_Id:{
        type:String,
        required:true
    },
    order_number:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    discount:{
        type:String,
        required:true
    },
    shipdate:{
        type:Date,
        required:true
    },
    orderdetail_Id:{
        type:String,
        required:true
    },
    billdate:{
        type:Date,
        required:true
    }

});

const OrderDetails=module.exports=mongoose.model('OrderDetails',OrderdetailsSchema);