import {Box, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
    container: {
        height:350,
        margin:10,
        display: "flex",
        alignItems:"center",
        flexDirection: "column",
        border: "1px solid #d3cede",
        borderRadius: 10,
        // width:"20%",
        "& > *":{
        padding: "0 5px 5px 5px"
    }
    },
    image: {
        height: 150,
        width:'100%',
        objectFit:"cover",
        borderRadius:"10px 10px 0 0"
    },
    text : {
        color: "#878787",
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600
    }, 
    details:{
        fontSize:14,
        wordBreak:"break-word"
    }
})


const Post = ({post}) => {
    const clasess = useStyles();
 const url = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
 const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str; 
 }
    return (
        <Box className={clasess.container}>
            <img src={post.picture || url} alt="wrapper" className={clasess.image} />
            <Typography className={clasess.text}>{post.categories}</Typography>
            <Typography className={clasess.heading}>{addElipsis(post.tittle, 20)}</Typography>
            <Typography className={clasess.text}>Author: {post.username}</Typography>
            <Typography className={clasess.details}>{addElipsis(post.description, 100)}</Typography>
        </Box>
    )
}



export default Post