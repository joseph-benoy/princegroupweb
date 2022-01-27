import { login } from "../controllers/admin.js";
import express from "express";

const router = express.Router();

router
.post("/login",login)

export {router as AdminRouter}