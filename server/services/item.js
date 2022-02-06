import models from "../utils/db.js";
import { sequelize } from "../utils/db.js";
import { QueryTypes } from "sequelize";
export const insertProductItem = (data)=>{
    const result = models.ITEM.create({
        NAME:data.name,
        PRICE:data.price,
        BRAND_ID:data.bid,
        PRODUCT_ID:data.pid,
        DESCRIPTION:data.description,
        IMAGE_PATH:data.filename
    })
    return result;
}
export const getAllProducts = async()=>{
    const result = await  models.ITEM.findAll()
    return result;
}
export const getProductsByCategory = async(cat)=>{
    const result = await sequelize.query(`SELECT * FROM ITEM WHERE PRODUCT_ID IN(SELECT ID FROM PRODUCT_TYPE WHERE SUBCAT_ID IN(SELECT ID FROM SUB_CATEGORY WHERE CATEGORY_ID IN (SELECT ID FROM CATEGORY WHERE NAME='${cat}')))`,{
        type: QueryTypes.SELECT
    })
    return result;
}
export const getProductByName = async(name)=>{
    const result = await models.ITEM.findOne({
        where:{
            NAME:name
        }
    })
    return result;
}
export const getProductById =  async(id)=>{
    const result = await sequelize.query(`SELECT ITEM.ID,ITEM.NAME,ITEM.PRICE,ITEM.DESCRIPTION,ITEM.IMAGE_PATH,BRANDS.NAME AS BRAND,PRODUCT_TYPE.NAME AS TYPE,CATEGORY.NAME AS CATEGORY,SUB_CATEGORY.NAME AS SUB FROM ITEM,PRODUCT_TYPE,BRANDS,CATEGORY,SUB_CATEGORY WHERE BRANDS.ID=ITEM.BRAND_ID AND PRODUCT_TYPE.ID=ITEM.PRODUCT_ID AND SUB_CATEGORY.ID=PRODUCT_TYPE.SUBCAT_ID AND CATEGORY.ID=SUB_CATEGORY.CATEGORY_ID AND ITEM.ID=${id}`,{
        type: QueryTypes.SELECT
    })
    return result;
}


export const searchItem = async(name)=>{
    const result = await sequelize.query(`SELECT * FROM ITEM WHERE NAME LIKE '%${name}%'`,{
        type: QueryTypes.SELECT
    })
    return result;
}
