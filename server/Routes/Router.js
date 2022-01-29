import express from "express";
import { createPost, getAllpost,getPost,updatePost,deletePost } from "../controller/post-controller.js";
import { uploadImage, getImage } from '../controller/image-controller.js'
import  upload  from "../utils/upload.js"
import {createComment , getComments , deleteComment} from "../controller/commentController.js"

const router = express.Router();

router.post("/create",createPost)
router.get('/posts', getAllpost)
router.get('/post/:id', getPost)
router.post('/updatePost/:id', updatePost)
router.delete('/deletePost/:id', deletePost)
router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage)
router.post('/comment/new', createComment) 
router.get('/comments/:id', getComments)
router.delete('/deleteComment/:id', deleteComment)

export default router;