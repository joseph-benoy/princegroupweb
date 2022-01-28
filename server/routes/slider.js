import express from "express";
import { getSliderA, getSliderB, putSlider1, putSlider2 } from "../controllers/slider.js";
import { validateToken } from "../middlewares/jwt.js";
import { slider1Upload,slider2Upload } from "../middlewares/multerUpload.js";

const router = express.Router();

router
.post("/1/new",[validateToken,slider1Upload.single('slider1')],putSlider1)
.post("/2/new",[validateToken,slider2Upload.single('slider2')],putSlider2)
.get("/1/all",getSliderA)
.get("/2/all",getSliderB)

export {router as SliderRouter}
