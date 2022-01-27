import express from "express";
import 'dotenv/config'
import { CategoryRouter } from "./routes/category.routes.js";
import { ProductRouter } from "./routes/product.js";


const app = express();
app.use(express.urlencoded({
    extended: true
}));

app.use("/category",CategoryRouter);
app.use("/product",ProductRouter);
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