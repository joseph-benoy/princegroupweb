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
    try{
        return models.SUB_CATEGORY.create({
            NAME:name,
            CATEGORY_ID:cid
        })
    }
    catch(e){
        return e;
    }
}

export const listSub = async(cid)=>{
    try{
        return await models.SUB_CATEGORY.findAll({
            where:{
                CATEGORY_ID:cid
            }
        });
    }
    catch(e){
        return e;
    }
}