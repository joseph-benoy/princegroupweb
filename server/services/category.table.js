import models from "../utils/db.js"
export const insertCategory = (categoryName,iconName)=>{
    return models.CATEGORY.create({
        NAME:categoryName,
        ICON_PATH:iconName
    })
}
export const listAllCategories = async()=>{
    return await models.CATEGORY.findAll();
}

export const addSub = (name,cid)=>{
    return models.SUB_CATEGORY.create({
        NAME:name,
        CATEGORY_ID:cid
    })
}