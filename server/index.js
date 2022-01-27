import express from "express";
import 'dotenv/config'
import { CategoryRouter } from "./routes/category.routes.js";
import { ProductRouter } from "./routes/product.js";
import { AdminRouter } from "./routes/admin.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.use("/category",CategoryRouter);
app.use("/product",ProductRouter);
app.use("/admin",AdminRouter);
app.get("/",(req,res)=>{
    res.json({
        status:"success"
    })
})
app.use((err,req,res,next)=>{
    res.status(400).json({error:err});
})
app.listen(process.env.PORT,()=>{
    console.clear()
    console.log("Server started at "+process.env.PORT);
});