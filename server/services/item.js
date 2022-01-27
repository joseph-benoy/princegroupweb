import models from "../utils/db.js";

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