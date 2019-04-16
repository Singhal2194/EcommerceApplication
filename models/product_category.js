const mongoose=require('mongoose');
const CategorySchema=mongoose.Schema({
    category_Id:{
        type:String,
        required:true
    },
    category_name:{
        type:String,
        required:true
    },
    categoryDescription:{
        type:String,
        required:true
    }
});

const Category=module.exports=mongoose.model('Category',CategorySchema);