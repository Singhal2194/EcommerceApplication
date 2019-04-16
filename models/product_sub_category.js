const mongoose=require('mongoose');
const SubCategorySchema=mongoose.Schema({
    category_Id:{
        type:String,
        required:true
    },
    subcategory_Id:{
        type:String,
        required:true
    },
    subcategory_name:{
        type:String,
        required:true
    },
    subcategoryDescription:{
        type:String,
        required:true
    },

});

const SubCategory=module.exports=mongoose.model('SubCategory',SubCategorySchema);