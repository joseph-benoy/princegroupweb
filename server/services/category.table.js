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

export const listBrands = async()=>{
    try{
       
        return await models.BRANDS.findAll();
    }
    catch(e){
        return e;
    }
}


export const listTypes = async(sid)=>{
    try{
       
        return await models.PRODUCT_TYPE.findAll({
            where:{
                SUBCAT_ID:sid
            }
        })
    }
    catch(e){
        return e;
    }
}
export const deleteCat = async(cid)=>{
    try{
        return await models.CATEGORY.destroy({
            where:{
                ID:cid
            }
        })
    }
    catch(e){
        return e;
    }
}
export const deleteSub = async(sid)=>{
    try{
        return await models.SUB_CATEGORY.destroy({
            where:{
                ID:sid
            }
        })
    }
    catch(e){
        return e;
    }
}
export const deleteType = async(tid)=>{
    try{
        return await models.PRODUCT_TYPE.destroy({
            where:{
                ID:tid
            }
        })
    }
    catch(e){
        return e;
    }
}
export const deleteBrand = async(bid)=>{
    try{
        return await models.BRANDS.destroy({
            where:{
                ID:bid
            }
        })
    }
    catch(e){
        return e;
    }
}