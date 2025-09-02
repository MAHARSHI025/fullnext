import mongoose from "mongoose";
import Comment from "./Commentmodel";

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
        type: [String],
        default: [],
    },

    isverified: {
        type: Boolean,
        default: true
    },
    color: {
        type: String,
        default: "transparent",
    },
    typer: {
        type: String,
        default: "think",
    },
    likecount: {
        type: Number,
        default: 0,
    },
    likes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Liken',
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],

    verifytoken: String,
    verifytokenexpiry: Date,
}, {
    timestamps: true
}
)

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User