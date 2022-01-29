import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import {Link, useHistory} from "react-router-dom"
const useStayles = makeStyles({
 component : {
     background : "#ffffff",
     color: "black"
 }, 
 container : {
     justifyContent: "center",
     "& > *" : {
         padding: 20,
     }
 }
})
const Header = () => {
    const history = useHistory;
    const clasess = useStayles();

return (
    <AppBar className={clasess.component}>
        <Toolbar className={clasess.container}>
          <Link to={"/"} style={{color:"inherit", textDecoration:"none"}}>  <Typography>Home</Typography> </Link>
          <Link to={"/about"} style={{color:"inherit", textDecoration:"none"}}>   <Typography>About</Typography> </Link>
           <Link to={'/contact'} style={{color:"inherit", textDecoration:'none'}}><Typography>Contact</Typography></Link> 
            <Typography>Login</Typography>
        </Toolbar>
    </AppBar>
)
}



export default Header