import { insertCategory,listAllCategories } from "../services/category.table.js";
export const addCategory = (req,res)=>{
    const result = insertCategory(req.body.categoryName,req.file.filename);
    return res.json(result); 
}
export const allCategories = async(req,res)=>{
    const result = await listAllCategories();
    return res.json(result);
}