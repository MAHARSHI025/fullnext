import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    
    userName: {
        type: String,
        required: true,
    },

    userliked:{
        type: Array,
    }

}
)

const Liker = mongoose.models.Liken || mongoose.model("Liken", likeSchema)

export default Liker