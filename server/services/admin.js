import models from "../utils/db.js";
import bcrypt from 'bcrypt';
import {createToken} from '../middlewares/jwt.js'
import { sequelize } from "../utils/db.js";
import { QueryTypes } from "sequelize";
export const loginAdmin = async (email,password,res)=>{
    models.ADMIN.findOne({
        where:{
            EMAIL:email
        }
    }).then(async(data)=>{
        bcrypt.compare(password,data.dataValues.PASSWORD).then((result)=>{
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
        return res.status(403).json({
            login:"failed"
        });
    })
}

export const updateAdmin = async(email,password)=>{
    try{
        bcrypt.hash(password,10).then(async(res)=>{
            const hash = res;
            console.log(res)
            try{
                const result = await sequelize.query(`UPDATE ADMIN SET EMAIL='${email}' ,PASSWORD='${hash.toString()}' WHERE ID=1`,{
                    type: QueryTypes.UPDATE
                })
    
            console.log(password)
            return result;
            }
            catch(e){
                return e
            }
        });


    }   
    catch(e){
        return e;
    } 
}