import {Link, useHistory} from "react-router-dom";
import {Box, Typography, makeStyles} from "@material-ui/core";
import {Edit, Delete} from "@material-ui/icons";
import { useEffect, useState } from "react";
import {getPost, deleteBlog} from "../../components/service/api"
import Comments from "../comments/comments"

const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: '0 5px'
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        padding: 5,
        border: '1px solid #878787',
        borderRadius: 10
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        },
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));




// const useStyle = makeStyles((theme)=>({
//     container:{
//         padding: "0 100px"
//     },
//     image:{
//         width: "100%",
//         height: "50vh",
//         objectFit: "cover"
        
//     }, 
//     icons:{
//         float:"right"
//     },
//     icon:{
//         margin:5,
//         border: "1px solid #878787",
//         padding: 5,
//         borderRadius: 10
//     },
//     heading:{
//         fontSize:38,
//         fontWeight:600,
//         textAlign:"center",
//         margin: "50px 0px 10px 0px"
//     },
//     subheading:{
//         color: "#878787",
//         display:"flex",
//         margin: "20px 0px"
//     },
//     link:{
//         color:"inherit",
//         textDecoration: "none"
//     }
// }))
const Detailview = ({match}) =>{
    const clasess = useStyle();
    const [post, setPost] = useState({});
    const history= useHistory()
    const deletePost = async() => {
       await deleteBlog(match.params.id);
        history.push("/")
    };
    useEffect(()=>{
        const fetchData = async()=>{
            let data = await getPost(match.params.id);
            console.log(data);
            setPost(data);
        }
        fetchData()
    }, [])
    return(
        <Box className={clasess.container}>
            <img className={clasess.image} src={post.picture || url} alt="banner"/>
            <Box className={clasess.icons}>
               <Link to={`/update/${post._id}`}> <Edit className={clasess.icon} color="primary" /></Link>
                <Delete onClick={()=>{deletePost()}} className={clasess.icon} color="error" />
            </Box>
            <Typography className={clasess.heading}>
                {post.tittle}
            </Typography>
            <Box className={clasess.subheading}>
                <Link className={clasess.link} to={`/?username=${post.username}`}><Typography>Author: <span style={{fontWeight:600}}> {post.username} </span></Typography></Link>
                <Typography style={{marginLeft:"auto"}}>{new Date(post.createDate).toDateString()}</Typography>
            </Box>
            <Typography>{post.description}</Typography>
            <Comments post={post} />
        </Box>
    )
}

export default Detailview