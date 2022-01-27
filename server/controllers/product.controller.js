import { insertCategory,listAllCategories } from "../services/category.table.js";
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
    const result = insertProduct(req.body.name,req.body.cid)
    return res.json(result);
}
export const allProduct = async (req,res)=>{
    const result  = await listAllProducts();
    return res.json(result);
}