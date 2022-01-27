import express from "express";
import { addProduct, allProduct } from "../controllers/product.controller.js";
import { validateToken } from "../middlewares/jwt.js";
const router = express.Router();

router
.post("/new",validateToken,addProduct)
.get("/all",allProduct)

export {router as ProductRouter}