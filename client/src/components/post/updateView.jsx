import {Box, FormControl, InputBase, makeStyles, Button, TextareaAutosize} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPost,updatePost,updloadFile } from "../../components/service/api"


const useStayles = makeStyles(theme => ({
    container:{
        padding: "0 100px",
        [theme.breakpoints.down('md')]: {
                padding: '0 10px'
        },
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

}));

const initialValues = {
    tittle: '',
    description: "",
    picture: "",
    username: "Muneeb",
    categories:"All",
    createDate: new Date(),

};

const UpdateView = ({match})=>{
    const clasess = useStayles();
    const [post, setPost] = useState(initialValues);
    const [file, setFile] = useState("");
    const [Image, setImage]= useState('')
    const history= useHistory()
    const url =post.picture ? post.picture : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80    ";
    const savePOst = async () => {
        await updatePost(match.params.id, post);
        history.push("/")
    };
    const handleChange = (e) => {
        setPost({...post,[e.target.name]: e.target.value})
    };
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
        getImage()
    },[file])


    useEffect(()=>{
        const fetchData = async() => {
            const data = await getPost(match.params.id);
            setPost(data)
        }
        fetchData();
    },[]);
return (
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
            <InputBase placeholder="Tittle" onChange={(e)=>{handleChange(e)}} value={post.tittle} name="tittle" className={clasess.title} />
            <Button color="primary" onClick={()=>{savePOst()}}  variant="contained">Update</Button>
        </FormControl>
        <TextareaAutosize 
        value={post.description}
        className={clasess.textarea}
        rowsMin={5}
        placeholder="Tell Your Story..."
        name="description"
        onChange={(e)=>{handleChange(e)}}
        />
            </Box>
    </>
)
}




export default UpdateView;