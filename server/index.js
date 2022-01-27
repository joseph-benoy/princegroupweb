import express from "express";
import 'dotenv/config'
import fileUpload from "express-fileupload";
import { CategoryRouter } from "./routes/category.routes.js";

const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(fileUpload());
app.use("/category",CategoryRouter);

app.get("/",(req,res)=>{
    res.json({
        status:"success"
    })
})
app.use((err,req,res,next)=>{
    res.status(400).json({error:err});
})
app.listen(process.env.PORT,()=>{
    console.log("Server started at"+process.env.PORT);
});