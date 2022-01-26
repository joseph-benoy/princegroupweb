import  Sequelize from "sequelize";
import initModels from "../models/init-models";




const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host:process.env.DB_HOST,
        dialect:"mysql"
    }
);

try{
    const models = initModels(sequelize);
}
catch(e){
    console.log(e);
}

export default models;