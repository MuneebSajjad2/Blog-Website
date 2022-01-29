import axios from "axios";


const URL = "http://localhost:8000";

export const createPost = async(Post) => {
   return await axios.post(`${URL}/create`, Post)
}

export const getAllpost = async(param) =>{
   try {
        let response = await axios.get(`${URL}/posts${param}`)
        return response.data;
   } catch (error) {
      console.log("Error while calling get all posts ", error);
   }
}
export const getPost = async(id)=>{
   try {
      let response = await axios.get(`${URL}/post/${id}`)
      return response.data;
   } catch (error) {
      console.log("Error while calling get post ", error);
   }
}
export const updatePost = async(id, post)=>{
   try {
      return await axios.post(`${URL}/updatePost/${id}`, post)
      
   } catch (error) {
      console.log("Error while calling update post ", error);
      
   }
}
export const deleteBlog = async(id) => {
   try {
      return await axios.delete(`${URL}/deletePost/${id}`)
      
   } catch (error) {
      console.log("Error while calling delete api", error);
   }
}
export const updloadFile = async(data) => {
   try {
     return await axios.post(`${URL}/file/upload`, data)
      
   } catch (error) {
      console.log("error while calling upload file api ", error);
   }
}
export const postCommentToDB = async(data) => {
   try {
      return await axios.post(`${URL}/comment/new`, data)
   } catch (error) {
      console.log('error while sending comment to mongodb ', error);
   }
}

export const getComments = async(id) => {
   try {
      let response = await axios.get(`${URL}/comments/${id}`)
         return response.data
   } catch (error) {
      console.log('error while getting comments from mongodb ', error);
   }
}
export const deleteComment = async(id) => {
   try {
      return await axios.delete(`${URL}/deleteComment/${id}`)
   } catch (error) {
      console.log('error while getting comments from mongodb ', error);
   }
}