var Userdb = require('../model/model')

//creating and saving of the new user



exports.create=(req,res)=>{

//validating request
if(!req.body){
    res.status(400).send({message:"field cannot be empty"})
    return;
}
//new users
const user = new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
})

//save users in the dataBase
user.save(user).then(data=>{
    res.send(data)
})
.catch(err=>{
    res.status(500).send({message:err.message ||"some error occured while creating" })
})
}

//retrieve and return all the users
//

exports.find=(req,res)=>{
Userdb.find().then(user=>{
    res.send(user)
})
.catch(err =>{
    res.status(500).send({message:err.message||"error occured while retreving the data"})
})

}

//update a new idendified user by user id

exports.update=(req,res)=>{

}

//delete a user with the spacified user id

exports.delete=(req,res)=>{

}