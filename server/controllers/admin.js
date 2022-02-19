import { loginAdmin, updateAdmin } from "../services/admin.js";

export const login = (req,res)=>{
    try{
       loginAdmin(req.body.email,req.body.password,res).then((result)=>{
           return result;
       })
    }
    catch(e){
        return res.status(500).json(e)
    }

}

export const updateLogin = async (req,res)=>{
    try{
        const result = await updateAdmin(req.body.email,req.body.password);
        return res.json("sdsd");
    }
    catch(e){
        return e;
    }
}