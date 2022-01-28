import models from "../utils/db.js";
import { sequelize } from "../utils/db.js";
import { QueryTypes } from "sequelize";


export const insertProduct = (productName,categoryId)=>{
    const result = models.PRODUCT_TYPE.create({
        NAME:productName,
        CATEGORY_ID:categoryId
    })
    return result;
}
export const listAllProducts = async()=>{
    try{
        return await models.PRODUCT_TYPE.findAll();
    }
    catch(e){
        return e;
    }
}
export const getMenu = async()=>{
    try{
        let menu = [];
        let data = await sequelize.query("SELECT PRODUCT_TYPE.NAME AS TYPE,SUB_CATEGORY.NAME AS SUB,CATEGORY.NAME AS CATEGORY,CATEGORY.ICON_PATH AS ICON FROM PRODUCT_TYPE,SUB_CATEGORY,CATEGORY WHERE PRODUCT_TYPE.SUBCAT_ID=SUB_CATEGORY.ID AND SUB_CATEGORY.CATEGORY_ID=CATEGORY.ID",{
            type: QueryTypes.SELECT
        })
        console.log(data)
        return data;
    }
    catch(e){
        return e;
    }
}