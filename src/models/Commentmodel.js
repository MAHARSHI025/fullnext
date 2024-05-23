import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    
    userName: {
        type: String,
        required: true,
    },

    usercomment:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    }

}
)

const Commenter = mongoose.models.Commen || mongoose.model("Commen", commentSchema)

export default Commenter