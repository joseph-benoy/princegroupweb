import express from "express";
import 'dotenv/config'
import { CategoryRouter } from "./routes/category.routes.js";
import { ProductRouter } from "./routes/product.js";
import { AdminRouter } from "./routes/admin.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import { SliderRouter } from "./routes/slider.js";
import path from 'path'


const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(cors({
    origin:"*"
}))
app.use("/static",express.static("uploads"))
app.use("/api/category",CategoryRouter);
app.use("/api/product",ProductRouter);
app.use("/api/admin",AdminRouter);
app.use("/api/slider",SliderRouter);

app.use(express.static(path.join("build")))

app.use((req, res, next) => {
    res.sendFile(path.join( "build", "index.html"));
  });

app.use((err,req,res,next)=>{
    res.status(400).json({error:err});
})




app.listen(process.env.PORT,()=>{
    console.clear()
    console.log("Server started at "+process.env.PORT);
});