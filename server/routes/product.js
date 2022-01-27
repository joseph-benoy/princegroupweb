import express from "express";
import { addProduct, allProduct } from "../controllers/product.controller.js";
const router = express.Router();

router
.post("/new",addProduct)
.get("/all",allProduct)

export {router as ProductRouter}