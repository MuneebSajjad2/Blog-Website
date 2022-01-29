import mongoose from "mongoose";



const postSchema = mongoose.Schema({
    tittle: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        require: true,    },
    picture: {
        type: String,
        require: false
        },
    username: {
        type: String,
        require: true
        },
    createDate: {
        type: Date,
        },
     categories: {
        type: String,
        },
})
const post = mongoose.model("post", postSchema);
export default post;
