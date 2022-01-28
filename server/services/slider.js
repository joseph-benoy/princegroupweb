import models from "../utils/db.js";

export const slider1 = (img)=>{
    const result = models.SLIDER1.create({
        IMG_PATH:img
    })
    return result;
}
export const slider2 = (img)=>{
    const result = models.SLIDER2.create({
        IMG_PATH:img
    })
    return result;
}
export const getSlider1 = async ()=>{
    const result = await models.SLIDER1.findAll();
    return result;
}
export const getSlider2 = async ()=>{
    const result = await models.SLIDER2.findAll();
    return result;
}