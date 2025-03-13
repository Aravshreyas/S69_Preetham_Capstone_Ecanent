import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:['Student',"Faculty","HOD","Admin"]},
    department:String,
    profilePic:String,
    isVerified:{type:String,default:false}
},{timestamps:true})

export default mongoose.model('User', userSchema);
