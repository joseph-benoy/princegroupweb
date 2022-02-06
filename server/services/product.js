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
        var menu = [];
        const data = await sequelize.query("SELECT PRODUCT_TYPE.NAME AS TYPE,SUB_CATEGORY.NAME AS SUB,CATEGORY.NAME AS CATEGORY,CATEGORY.ICON_PATH AS ICON FROM PRODUCT_TYPE,SUB_CATEGORY,CATEGORY WHERE PRODUCT_TYPE.SUBCAT_ID=SUB_CATEGORY.ID AND SUB_CATEGORY.CATEGORY_ID=CATEGORY.ID",{
            type: QueryTypes.SELECT
        })
        var cats= data.map((item)=>(
            item.CATEGORY
        ))
        cats = [...new Set(cats)];
        var icons = data.map((item)=>(
            item.ICON
        ))
        icons = [...new Set(icons)]
        var subcats = [];
        var subCount = 0;
        for(let cat of cats){
            let temp = []
            for(let item of data){
                if(item.CATEGORY===cat){
                    temp.push(item.SUB);
                }   
            }
            subcats[subCount] =[...new Set(temp)]
            subCount++;
        }
        let sb = [];
        for(let sub of subcats){
            let slist = []
            for(let s of sub){
                let temp = [];
                for(let item of data){
                    if(item.SUB===s){
                        temp.push(item.TYPE)
                    }
                }
                let subCat = {
                    sub:s,
                    types:[...new Set(temp)]
                }
                slist.push(subCat);
            }
            sb.push(slist);
        }
        var i=0;
        menu = sb.map((item)=>(
            {
                main:cats[i],
                icon:icons[i++],
                sub:item
            }
        ))
        return menu;
    }
    catch(e){
        return e;
    }
}

export const addProductType = (name,sid)=>{
    return models.PRODUCT_TYPE.create({
        NAME:name,
        SUBCAT_ID:sid
    })
}

export const addBrand= (name)=>{
    return models.BRANDS.create({
        NAME:name
    })
}

export const getAllItems = async()=>{
    return models.ITEM.findAll();
}