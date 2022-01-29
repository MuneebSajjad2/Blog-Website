import { makeStyles } from "@material-ui/styles"
import { Box, Typography } from "@material-ui/core"


const useStyles = makeStyles({
    image: {
        background : `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        width:"100%",
        height:"50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        "& :first-child": {
            fontSize: 66,
            color: "#ffffff",
            lineHight: 1,
        },
        "& :last-child": {
            backgroundColor: "#ffffff",
            fontSize: 20

        }
    }
})

const Banner = () => {
    const clasess = useStyles()
  return (
      <Box className = {clasess.image}>
          <Typography>BLOG</Typography>
          <Typography>CODE FOR PRACTICE</Typography>
      </Box>
  )
}

export default Banner