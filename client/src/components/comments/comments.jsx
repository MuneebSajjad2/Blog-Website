import { TextareaAutosize,Box,Button, makeStyles } from "@material-ui/core"
import { useEffect } from "react"
import { useState } from "react"
import {postCommentToDB, getComments} from "../service/api"
import Comment from "./Comment" 



const useStayles = makeStyles({
     component: {
         marginTop: 100,
         display: "flex",
     },
     image: {
         width:50,
         height:50,
         borderRadius: "50%"
     },
     textarea:{
         width: "100%",
         margin: "0 20px"
     },
     button:{
         height: 40
     }

})
const initialValues = {
    name: "",
    postId:"",
    date: new Date(),
    comments: ''
}

const Comments = ({post}) => {
    const [comment, setComment] = useState(initialValues)
    const [comments, setComments] = useState([])
    const [toggle, setToggle] = useState(false)
    const url = "https://static.thenounproject.com/png/12017-200.png";
    const clasess = useStayles()
    const handleChange = (e) => {
        setComment({...comment,
            name:post.username,
            postId:post._id,
            comments: e.target.value
            }
            )
    }
    const postComment = async() => {
       await postCommentToDB(comment)
       setToggle(prev => !prev)
    }
    useEffect(()=>{
        const getData = async()=>{
          let response =  await getComments(post._id)
          setComments(response);
        }
        getData();
    }, [post, toggle])
    return( 
    
        <Box>
            <Box className={clasess.component} >
                <img src={url} all="dp" className={clasess.image} />
                <TextareaAutosize className={clasess.textarea} rowsMin={5} onChange={(e) => handleChange(e)} />
                <Button onClick={() => postComment()} className={clasess.button} variant="contained" color="primary" size="medium">Post</Button>
            </Box>
            {
                comments && comments.map(comment => (
                    <Comment comment={comment} setToggle={setToggle} />
                ))
            }
        </Box>
    )
}




export default Comments