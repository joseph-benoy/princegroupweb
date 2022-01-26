import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _BRANDS from  "./BRANDS.js";
import _CATEGORY from  "./CATEGORY.js";
import _ITEM from  "./ITEM.js";
import _PRODUCT_TYPE from  "./PRODUCT_TYPE.js";

export default function initModels(sequelize) {
  const BRANDS = _BRANDS.init(sequelize, DataTypes);
  const CATEGORY = _CATEGORY.init(sequelize, DataTypes);
  const ITEM = _ITEM.init(sequelize, DataTypes);
  const PRODUCT_TYPE = _PRODUCT_TYPE.init(sequelize, DataTypes);

  ITEM.belongsTo(BRANDS, { as: "BRAND", foreignKey: "BRAND_ID"});
  BRANDS.hasMany(ITEM, { as: "ITEMs", foreignKey: "BRAND_ID"});
  PRODUCT_TYPE.belongsTo(CATEGORY, { as: "CATEGORY", foreignKey: "CATEGORY_ID"});
  CATEGORY.hasMany(PRODUCT_TYPE, { as: "PRODUCT_TYPEs", foreignKey: "CATEGORY_ID"});
  ITEM.belongsTo(PRODUCT_TYPE, { as: "PRODUCT", foreignKey: "PRODUCT_ID"});
  PRODUCT_TYPE.hasMany(ITEM, { as: "ITEMs", foreignKey: "PRODUCT_ID"});

  return {
    BRANDS,
    CATEGORY,
    ITEM,
    PRODUCT_TYPE,
  };
}
