import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }, 
    thought:{
        type: String,
        required: true,
    }, 
    isverified:{
        type: Boolean,
        default: false
    },
    typer:{
        type: String,
        default:"transparent",
    },
    verifytoken: String,
    verifytokenexpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User