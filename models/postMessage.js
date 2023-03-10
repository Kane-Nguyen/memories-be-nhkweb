import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: { type : String },
    creator : { type : String },
    name:  String,
    message:{ type : String },
    tags: [String],
    selectedFile: String,
    likes: {
        type : [String],
        default: [],
    },
    comments:{type : [String], default:[]},
    createdAt: {
        type : Date,
        default: new Date(),
    }

});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;