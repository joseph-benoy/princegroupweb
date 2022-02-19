import { login, updateLogin } from "../controllers/admin.js";
import express from "express";
import { catlog } from "../middlewares/multerUpload.js";
import { validateToken } from "../middlewares/jwt.js";

const router = express.Router();

router
.post("/login",login)
.post("/catlog/new",catlog.single('catlog'),(req,res)=>{
    return res.json({
        message:"catlog updated!"
    })
})
.post("/update",validateToken,updateLogin);
export {router as AdminRouter}