import { addSub, deleteBrand, deleteCat, deleteSub, deleteType, insertCategory,listAllCategories, listBrands, listSub, listTypes } from "../services/category.table.js";
import { getProductById, getProductByName, getProductsByCategory, insertProductItem, searchItem, updateItem } from "../services/item.js";
import { addBrand, addProductType, deleteItemById, getAllItems, getMenu, getProductByType, insertProduct,listAllProducts } from "../services/product.js";
export const addCategory = (req,res)=>{
    const result = insertCategory(req.body.name,req.file.filename);
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
export const productByCategory = async (req,res)=>{
    const result = await getProductsByCategory(req.body.name);
    return res.json(result);
}
export const productByName =async(req,res)=>{
    const result = await getProductByName(req.body.name);
    return res.json(result);
}
export const productById =async(req,res)=>{
    const result = await getProductById(req.body.id);
    return res.json(result);
}
export const menu = async(req,res)=>{
    const result = await getMenu();
    return res.json(result);
}

export const addSubCat = (req,res)=>{
    console.log(req.body)
    const result = addSub(req.body.name,req.body.cid);
    return res.json(result)
}
export const addType = (req,res)=>{
    const result = addProductType(req.body.name,req.body.sid);
    return res.json(result)
}
export const addNewBrand = (req,res)=>{
    const result = addBrand(req.body.name)
    return res.json(result)
}
export const getSub = async(req,res)=>{
    const result = await listSub(req.body.cid)
    return res.json(result);
}

export const getBrands = async(req,res)=>{
    const result = await listBrands();
    return res.json(result)
}

export const getTypes = async(req,res)=>{
    const result = await listTypes(req.body.sid);
    return res.json(result)
}

export const getItems = async(req,res)=>{
    const result = await getAllItems();
    return res.json(result)
}

export const deleteItem = async(req,res)=>{
    const result = await deleteItemById(req.body.id);
    return res.json(result);
}
export const productByType = async(req,res)=>{
    const result = await getProductByType(req.body.type);
    return res.json(result);
}
export const search = async(req,res)=>{
    const result = await searchItem(req.body.name);
    return res.json(result);
}


export const deleteCategory= async (req,res)=>{
    const result =await deleteCat(req.body.id);
    return res.json(result);
}
export const deleteSubCat = async (req,res)=>{
    const result = await deleteSub(req.body.id);
    return res.json(result);
}
export const deleteProductType = async (req,res)=>{
    const result = await deleteType(req.body.id);
    return res.json(result);
}
export const deleteBrandType = async (req,res)=>{
    const result = await deleteBrand(req.body.id);
    return res.json(result);
}


export const updateProduct = async(req,res)=>{
    const result = await updateItem(req.body.id,req.body.title,req.body.description,req.body.price,req.file.filename)
    return res.json(result);
}