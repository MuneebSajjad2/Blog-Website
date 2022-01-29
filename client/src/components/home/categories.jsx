import { Button, makeStyles, TableCell,Table,TableHead,TableRow,TableBody } from "@material-ui/core"
import { categories } from "./constants/data";
import {Link, useLocation} from "react-router-dom";


const useStyles = makeStyles({
    create:{
        background:'#6495ED',
        margin: 20,
        width: "86%"

    },
     table: {
        border: "1px solid rgba(224,224,224,1)"
    },
    link:{
        textDecoration: "none",
        color: "inherit"

    }
})

const Categories = () => {

    const clasess = useStyles();
    const location = useLocation();
    let params = new URLSearchParams(location.search);

    return(
        <>
        <Link to={`/create/${location.search}`} style={{ textDecoration: 'none' }}><Button varient="contained" className={clasess.create}>Create Blog</Button></Link>
        <Table className={clasess.table}>
            <TableHead>
                <TableRow>
                   <TableCell><Link className={clasess.link} to={"/"}> All Categories</Link></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category => (
                        <TableRow>
                            <TableCell>
                        <Link className={clasess.link} to={`/?category=${category}`}> 
                         {category}
                         </Link>
                            </TableCell>
                        </TableRow>
                     ))
                }

            </TableBody>

            
        </Table>
        </>
    )
}





export default Categories;