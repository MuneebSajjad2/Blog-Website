import { makeStyles, Typography, Box } from "@material-ui/core";
import {Delete} from '@material-ui/icons';
import {deleteComment} from "../service/api"



const useStyles = makeStyles({
    component : {
        marginTop: 30,
        backgroundColor: "#f5f5f5",
        padding: 10
    },
    container:{
        display: "flex",
        marginBottom: 5
    },
    name:{
        fontSize: 18,
        fontWeight: 600,
        marginRight: 20
    },
    date:{
        fontSize:14,
        color: "#878787"
    },
    delete:{
        marginLeft: "auto"
    }
})


const Comment = ({comment, setToggle}) => {
const clasess = useStyles()
const removeComment = async() => {
        await deleteComment(comment._id)
        setToggle(prev => !prev)
        
}

return (
        <Box className={clasess.component}>
            <Box className={clasess.container}>
                <Typography className={clasess.name}>{comment.name}</Typography>
                <Typography className={clasess.date}>{new Date(comment.date).toDateString()}</Typography>

                <Delete onClick={() => removeComment()} className={clasess.delete} />
            </Box>
            <Typography>{comment.comments}</Typography>
        </Box>
    )
}



export default Comment;