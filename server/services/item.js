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
    const result = await sequelize.query(`SELECT * FROM ITEM WHERE PRODUCT_ID IN(SELECT ID FROM PRODUCT_TYPE WHERE CATEGORY_ID=${cat})`,{
        type: QueryTypes.SELECT
    })
    return result;
}