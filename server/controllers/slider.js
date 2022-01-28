import { getSlider1, getSlider2, slider1, slider2 } from "../services/slider.js"

export const getSliderA = async(req,res)=>{
    const result = await getSlider1();
    return res.json(result); 
}
export const getSliderB = async(req,res)=>{
    const result = await getSlider2();
    return res.json(result); 
}
export const putSlider1 = (req,res)=>{
    const result = slider1(req.file.filename)
    return res.json(result);
}
export const putSlider2 = (req,res)=>{
    const result = slider2(req.file.filename)
    return res.json(result);
}
