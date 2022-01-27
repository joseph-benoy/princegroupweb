import { sign,verify,decode } from "jsonwebtoken";
import 'dotenv/config'

const secret = process.env.JWT_CODE;

export const createToken = (payload)=>{
    return sign(payload,secret);
}

export const validateToken = (req,res,next)=>{
    const accessToken = req.cookies['access-token'];
    const accessToken =  req.cookies['access-token'];
    if(!accessToken){
        return res.status(400).json({error:"user not authenticated"});
    }
    else{
        try{
            const payload = verify(accessToken,secret);
            if(payload){
                req.authenticated = true;
                req.username = payload.username;
                req.id = payload.id;
                return next();
            }
        }
        catch(err){
            res.status(400).json({error:err});
        }
    }
}