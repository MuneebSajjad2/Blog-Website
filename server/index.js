import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import connection from "../server/database/db.js"
import router from "./Routes/Router.js";

const app = express();
const URL = 8000;
app.listen(URL, ()=>{ console.log("Server is running successfully")});
app.use(cors());    
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use("/", router);
connection()