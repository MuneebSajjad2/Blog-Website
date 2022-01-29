import {Box, FormControl, InputBase, makeStyles, Button, TextareaAutosize} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { useEffect, useState } from "react";
import {createPost, updloadFile} from "../service/api";
import {useHistory} from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStayles = makeStyles({
    container:{
        padding: "0 100px"
    },
    image:{
        width: "100%",
        height: "50vh",
        objectFit: "cover"
        
    },
    form:{
        display:"flex",
        flexDirection:"row",
        marginTop:10
    },
    title:{
        flex:1,
        fontSize:25,
        margin: "0 30px"
    },
    textarea:{
        border:"none",
        marginTop:"50px",
        width:"100%",
        "&:focus-visible":{
            outline:"none"
        }
    }

})


const initialValues = {
    tittle: '',
    description: "",
    picture: "",
    username: "",
    categories: '',
    createDate: new Date(),

};
const CreateView = () => {
    const clasess = useStayles();
    const [post, setPost] = useState(initialValues);
    const location = useLocation();
    
    
    const history = useHistory()
    const [file, setFile] = useState("");
    useEffect(()=>{
        const getImage = async() => {
            if(file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                const image =  await updloadFile(data);
                post.picture = image.data;
                setImage(image.data);
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All'

    },[file])
    const handleChange = (e) => {
        setPost({...post,[e.target.name]: e.target.value})
    }
    const savePost = async () => {
        await createPost(post) 
        history.push('/');
    };
    const [Image, setImage]= useState('')
    const url = post.picture ? post.picture :"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";


    return(
    <>
    <Box className={clasess.container }>
        <img className={clasess.image} src={url} alt="banner"/>

        <FormControl className={clasess.form}>
            <label htmlFor="fileinput">
            <AddCircle fontSize="large" color="action" />
            </label>
            <input
             type="file"
              id="fileinput"
               style={{display:"none"}}
               onChange={(e)=> setFile(e.target.files[0])}
             />
            <InputBase
                onChange={(e)=>handleChange(e)}
                name="tittle"
            placeholder="Tittle" className={clasess.title}
             />

            <Button onClick={()=> savePost()} color="primary" variant="contained">Publish</Button>
        </FormControl>
        <TextareaAutosize 
       onChange={(e)=>handleChange(e)}
        className={clasess.textarea}
        rowsMin={5}
        placeholder="Tell Your Story..."
        name="description"
        />
            </Box>
    </>
)
}




export default CreateView;