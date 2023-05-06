const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean
})


const UserModal=mongoose.model('User',userSchema)

module.exports={
    UserModal
}