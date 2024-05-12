import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    thought: {
        type: String,
        required: true,
    },
    isverified: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: "transparent",
    },
    typer: {
        type: String,
        default: "think",
    },
    verifytoken: String,
    verifytokenexpiry: Date,
}, {
    timestamps: true
}
)

const User = mongoose.models.users || mongoose.model("users", userSchema)

export default User