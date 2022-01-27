import { loginAdmin } from "../services/admin.js";

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