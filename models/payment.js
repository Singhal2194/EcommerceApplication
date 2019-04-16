const mongoose=require('mongoose');
const PaymentSchema=mongoose.Schema({
    payment_Id:{
        type:String,
        required:true
    },
    payment_type:{
        type:String,
        required:true
    },
    allowed:{
        type:String,
        required:true
    }
});

const Payment=module.exports=mongoose.model('Payment',PaymentSchema);