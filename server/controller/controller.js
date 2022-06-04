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
    res.redirect('/add_user')
   
})
.catch(err=>{
    res.status(500).send({message:err.message ||"some error occured while creating" })
})
}


//single user and all user

exports.find=(req,res)=>{

if(req.query.id){
    const id = req.query.id;
    Userdb.findById(id).then(data=>{
        if(!data){
         res.status(404).send({message:"not found user with"+id})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"error in retreaving the data of the user with"+id})
    })

}else{
    Userdb.find().then(user=>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({message:err.message||"error occured while retreving the data"})
    })

}



}



// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }
    

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}



// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}




//delete a user with the spacified user id
exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}