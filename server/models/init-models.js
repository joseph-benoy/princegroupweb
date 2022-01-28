import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _ADMIN from  "./ADMIN.js";
import _BRANDS from  "./BRANDS.js";
import _CATEGORY from  "./CATEGORY.js";
import _ITEM from  "./ITEM.js";
import _PRODUCT_TYPE from  "./PRODUCT_TYPE.js";
import _SLIDER1 from  "./SLIDER1.js";
import _SLIDER2 from  "./SLIDER2.js";
import _SUB_CATEGORY from  "./SUB_CATEGORY.js";

export default function initModels(sequelize) {
  const ADMIN = _ADMIN.init(sequelize, DataTypes);
  const BRANDS = _BRANDS.init(sequelize, DataTypes);
  const CATEGORY = _CATEGORY.init(sequelize, DataTypes);
  const ITEM = _ITEM.init(sequelize, DataTypes);
  const PRODUCT_TYPE = _PRODUCT_TYPE.init(sequelize, DataTypes);
  const SLIDER1 = _SLIDER1.init(sequelize, DataTypes);
  const SLIDER2 = _SLIDER2.init(sequelize, DataTypes);
  const SUB_CATEGORY = _SUB_CATEGORY.init(sequelize, DataTypes);

  ITEM.belongsTo(BRANDS, { as: "BRAND", foreignKey: "BRAND_ID"});
  BRANDS.hasMany(ITEM, { as: "ITEMs", foreignKey: "BRAND_ID"});
  SUB_CATEGORY.belongsTo(CATEGORY, { as: "CATEGORY", foreignKey: "CATEGORY_ID"});
  CATEGORY.hasMany(SUB_CATEGORY, { as: "SUB_CATEGORies", foreignKey: "CATEGORY_ID"});
  ITEM.belongsTo(PRODUCT_TYPE, { as: "PRODUCT", foreignKey: "PRODUCT_ID"});
  PRODUCT_TYPE.hasMany(ITEM, { as: "ITEMs", foreignKey: "PRODUCT_ID"});
  PRODUCT_TYPE.belongsTo(SUB_CATEGORY, { as: "SUBCAT", foreignKey: "SUBCAT_ID"});
  SUB_CATEGORY.hasMany(PRODUCT_TYPE, { as: "PRODUCT_TYPEs", foreignKey: "SUBCAT_ID"});

  return {
    ADMIN,
    BRANDS,
    CATEGORY,
    ITEM,
    PRODUCT_TYPE,
    SLIDER1,
    SLIDER2,
    SUB_CATEGORY,
  };
}
