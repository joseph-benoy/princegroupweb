import { insertCategory,listAllCategories } from "../services/category.table.js";
export const addCategory = (req,res)=>{
    if(!req.file){
        return res.json({err:"no file"})
    }
    const result = insertCategory(req.body.categoryName,req.file.icon.name);
    console.log(req.body.categoryName+req.file.icon.name)
    return res.json(result);
}
export const allCategories = (req,res)=>{
    const result = listAllCategories();
    return res.json(result);
}