import { Grid } from "@material-ui/core"
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Post from "./post"
import {getAllpost} from "../../components/service/api";
import { useLocation } from "react-router-dom";

const Posts = () =>{
      const [posts, setPosts] = useState([]);
      const { search } = useLocation();
      useEffect(()=>{
        const fetchData = async ()=>{
         let data = await getAllpost(search);
         setPosts(data)
         console.log(data);
        }
          fetchData();
      }, [search])
        // const posts = [1,2,3,4,5,6,7,8,9];
    
    return (
        
        posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                  <Link to={`/details/${post._id}`} style={{color:"inherit",textDecoration:"none"}}>
                    <Post post={post} />
                    </Link>
                    </Grid>
                ))
    )
}

export default Posts;