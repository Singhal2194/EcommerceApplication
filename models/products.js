const mongoose=require('mongoose');
const ProductSchema=mongoose.Schema({
    product_Id:{
        type:String,
        required:true
    },
    subcategory_Id:{
        type:String,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    category_id:{
        type:String,
        required:true
    },
    Availability:{
        type:String,
        required:true
    },
    Size:{
        type:String,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    },

});

const Product=module.exports=mongoose.model('Product',ProductSchema);