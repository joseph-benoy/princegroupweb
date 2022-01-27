import { insertCategory,listAllCategories } from "../services/category.table.js";
import { insertProductItem } from "../services/item.js";
import { insertProduct,listAllProducts } from "../services/product.js";
export const addCategory = (req,res)=>{
    const result = insertCategory(req.body.categoryName,req.file.filename);
    return res.json(result); 
}
export const allCategories = async(req,res)=>{
    const result = await listAllCategories();
    return res.json(result);
}
export const addProduct = (req,res)=>{
    try{
        const result = insertProduct(req.body.name,req.body.cid)
        return res.json(result);
    }
    catch(e){
        return res.status(500).json(e)
    }
}
export const allProduct = async (req,res)=>{
    const result  = await listAllProducts();
    return res.json(result);
}
export const addProductItem = (req,res)=>{
    const result = insertProductItem({...req.body,filename:req.file.filename})
    return res.json(result)
}