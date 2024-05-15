import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    
    userName: {
        type: String,
        required: true,
    },
    
    likecount: {
        type: Number,
        default: 0,
    },

}
)

const Liker = mongoose.models.Liker || mongoose.model("Liker", likeSchema)

export default Liker