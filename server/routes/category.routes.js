import express from "express";
import { addCategory,allCategories } from "../controllers/product.controller.js";

const router = express.Router();

router
.post("/new",addCategory)
.get("/all",allCategories);

export {router as CategoryRouter};