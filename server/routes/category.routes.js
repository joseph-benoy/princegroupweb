import express from "express";
import { addCategory,addNewBrand,addSubCat,addType,allCategories } from "../controllers/product.controller.js";
import { validateToken } from "../middlewares/jwt.js";
import { catIconUpload } from "../middlewares/multerUpload.js";
import { addBrand } from "../services/product.js";


const router = express.Router();



try{
    router
.post("/new",[validateToken,catIconUpload.single("icon")],addCategory)
.get("/all",allCategories)
.post("/newsub",validateToken,addSubCat)
.post("/newtype",validateToken,addType)
.post("/newbrand",validateToken,addNewBrand)
}
catch(e){
    console.log(e);
}


export {router as CategoryRouter};