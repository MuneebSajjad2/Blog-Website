import { response } from "express";
import comment from "../schema/comment-Schema.js";
import Comment from "../schema/comment-Schema.js"


export const createComment = async(request, response) => {
    try {
        const comment = new Comment(request.body)
        comment.save();
        response.status(200).json('comment save successfully')
        
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getComments = async(request,response) => {
    try {
      const comments = await Comment.find({postId: request.params.id })
      response.status(200).json(comments)
    } catch (error) {
        response.status(500).json(error)
    }
}
export const deleteComment = async(request, response) => {
    try {
        const comment = await Comment.findById(request.params.id)
       await comment.delete();
        response.status(200).json("comment delete successfully")
    } catch (error) {
        response.status(500).json(error)
    }
}
