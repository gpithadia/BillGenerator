const mongoose=require('mongoose')

const VendorSchema=mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    address:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:false
    },
    phone:{
      type:Number,
      required:true
    }
});

const Vendor =module.exports = mongoose.model('Vendor',VendorSchema);
