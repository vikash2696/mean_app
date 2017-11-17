var Users = require('../models/myModel');

module.exports = {

    create(req,res){
       console.log("saveing users");    
        if(!req.body.name) {
            return  res.status(400).send({err:"Name is required Filed"});
        }
        Users.create({
            name: req.body.name,
            address: req.body.address,
            city: req.body.city
        },function(err,saveduser){
            if(err) {
                return  res.status(500).send({err:"Something error"});
            }
            return  res.status(200).json(saveduser);
        });
    },
    find(req,res){
        console.log("get all users");   
        Users.find({},function(err,alluser){
            if(err) {
                return  res.status(404).send(err);
            }
            return  res.status(200).json(alluser);
        });
       
    },
    findOne(req,res){
        console.log("get user by id");  
        let id = req.params.id;
        Users.findById(id,function(err,user){
            if(err) {
                return  res.status(404).send(err);
            }
            return  res.status(200).json(user);
        });
    },
    update(req,res){
        console.log("update user by id");   
        let id = req.params.id;
        if(!id) {
            return  res.status(404).send({err :"Invalid id"});
        }
        var updatedata = {};
        if(req.body.name) {
            updatedata.name = req.body.name;
        }
        if(req.body.city) {
            updatedata.city = req.body.city;
        }
        if(req.body.address) {
            updatedata.address = req.body.address;
        }
        Users.findByIdAndUpdate(id,updatedata, function(err,updateduser){
            if(err) {
                return  res.status(500).send(err);
            }
            return  res.status(200).json(updateduser);
        });
    },
    delete(req,res){
        console.log("delete user by id"); 
        let id = req.params.id;
        if(!id) {
            return  res.status(404).send({err :"Invalid id"});
        }

        Users.findByIdAndRemove(id, function(err,deleteuser){
            if(err) {
                return  res.status(500).send(err);
            }
            if(!deleteuser) {
                return  res.status(404).send({err : "User not found by this id"});
            }
            return  res.status(200).json(deleteuser);
        });
    }

};
