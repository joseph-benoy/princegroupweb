import express from "express";
import { addCategory,allCategories } from "../controllers/product.controller.js";
import { validateToken } from "../middlewares/jwt.js";
import { catIconUpload } from "../middlewares/multerUpload.js";


const router = express.Router();




router
.post("/new",[validateToken,catIconUpload.single("icon")],addCategory)
.get("/all",allCategories);

export {router as CategoryRouter};