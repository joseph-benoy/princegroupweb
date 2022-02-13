import { login } from "../controllers/admin.js";
import express from "express";
import { catlog } from "../middlewares/multerUpload.js";

const router = express.Router();

router
.post("/login",login)
.post("/catlog/new",catlog.single('catlog'),(req,res)=>{
    return res.json({
        message:"catlog updated!"
    })
})
export {router as AdminRouter}