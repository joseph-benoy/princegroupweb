import express from "express";
import { addProduct, addProductItem, allProduct, productByCategory, productByName,productById, menu } from "../controllers/product.controller.js";
import { validateToken } from "../middlewares/jwt.js";
import { ItemUpload } from "../middlewares/multerUpload.js";


const router = express.Router();

router
.post("/new",validateToken,addProduct)
.get("/all",allProduct)
.post("/item/new",[validateToken,ItemUpload.single('image')],addProductItem)
.post("/item/category",productByCategory)
.post("/item/name",productByName)
.post("/item/id",productById)
.get("/menu",menu)


export {router as ProductRouter}