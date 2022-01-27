import models from "../utils/db.js"
export const insertCategory = (categoryName,iconName)=>{
    return models.CATEGORY.create({
        NAME:categoryName,
        ICON_PATH:iconName
    })
}
export const listAllCategories = ()=>{
    return models.CATEGORY.findAll();
}