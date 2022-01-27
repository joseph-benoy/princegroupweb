import models from "../utils/db.js";

export const insertProduct = (productName,categoryId)=>{
    const result = models.PRODUCT_TYPE.create({
        NAME:productName,
        CATEGORY_ID:categoryId
    })
    return result;
}