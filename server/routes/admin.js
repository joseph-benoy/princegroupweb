import { login, updateLogin } from "../controllers/admin.js";
import express from "express";
import { catlog, slider1, slider2, slider3 } from "../middlewares/multerUpload.js";
import { validateToken } from "../middlewares/jwt.js";

const router = express.Router();

router
.post("/login",login)
.post("/catlog/new",catlog.single('catlog'),(req,res)=>{
    return res.json({
        message:"catlog updated!"
    })
})
.post("/update",validateToken,updateLogin)
.post("/slider1",[slider1.single('image'),validateToken],(req,res)=>{
    return res.json({
        message:"Slider 1 updated!"
    })
})
.post("/slider2",[slider2.single('image'),validateToken],(req,res)=>{
    return res.json({
        message:"Slider 2 updated!"
    })
})
.post("/slider3",[slider3.single('image'),validateToken],(req,res)=>{
    return res.json({
        message:"Slider 3 updated!"
    })
})



export {router as AdminRouter}