import { response } from "express";
import post from "../schema/postSchema.js";
import Post from "../schema/postSchema.js";


export const createPost = async(request,response) => {
    
    let posts;

    try {        
                posts = await new Post(request.body);
                posts.save();
        response.status(200).json("Blog save successfully")
    } catch (error) {
        response.status(500).json(error)
    }
}

export const getAllpost = async(request, response) => {
    const username = request.query.username;
    const category = request.query.category;
    let posts;
    try {
        if (username)
        posts =   await Post.find({username : username})
    else if (category)
        posts =   await Post.find({categories : category})
     else 
          posts = await Post.find({});
         response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}
export const getPost = async(request,response) => {
    try {
        let post = await Post.findById(request.params.id);
        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}
export const editPost = async(request,response) => {
    try {
        let post = await Post.findById(request.params.id);
        
    } catch (error) {
        response.status(200).json(post)
        
    }
}
export const updatePost = async(request,response) => {
    try {
        let post = await Post.findByIdAndUpdate(request.params.id, {$set: request.body})
    } catch (error) {
        response.status(200).json(post)
    }
}
export const deletePost = async (request,response) => {
    try {
       let post =  await Post.findById(request.params.id);
       post.delete()
    } catch (error) {
        response.status(200).json(error)
    }
}
