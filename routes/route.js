const express = require('express');
const router = express.Router();

const Vendor = require('../models/vendors');

//retrieving data
router.get('/vendors',(req,res,next)=>{
  Vendor.find(function(err,vendors){
    res.json(vendors);
  })

})

//add vendor
router.post('/vendor',(req,res,next)=>{
  console.log(req.body)
  let newVendor = new Vendor({
    name : req.body.name,
    address : req.body.address,
    email : req.body.email,
    phone : req.body.phone
  });

  newVendor.save((err,vendor)=>{
    if(err){
      res.json({msg:"Failed to add vendor"});
    }
    else{
      res.json({msg:"Vendor saved successfully"});
    }
  })
})

//delete vendor
router.delete('/vendor/:id',(req,res,next)=>{
  Vendor.remove({_id:req.params.id},function(err,result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  })
})

module.exports=router;
