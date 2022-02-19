import models from "../utils/db.js";
import bcrypt from 'bcrypt';
import {createToken} from '../middlewares/jwt.js'

export const loginAdmin = async (email,password,res)=>{
    models.ADMIN.findOne({
        where:{
            EMAIL:email
        }
    }).then(async(data)=>{
        bcrypt.compare(password,data.dataValues.PASSWORD.toString()).then((result)=>{
            if(result){
                let accessToken = createToken({
                    email:data.dataValues.EMAIL,
                    id:data.dataValues.ID
                })
                return res.cookie('access-token',accessToken,{
                    maxAge:new Date(253402300000000),
                    httpOnly:true
                }).json({
                    login:"success"
                });
            }
            else{
                return res.status(403).json({
                    login:"failed"
                });
            }
        })
    }).catch((e)=>{
        return e;
    })
}

export const updateAdmin = async({})=>{

}