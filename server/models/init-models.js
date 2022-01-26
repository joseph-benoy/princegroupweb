const DataTypes = require("sequelize").DataTypes;
const _BRANDS = require("./BRANDS");
const _CATEGORY = require("./CATEGORY");
const _ITEM = require("./ITEM");
const _PRODUCT_TYPE = require("./PRODUCT_TYPE");

function initModels(sequelize) {
  const BRANDS = _BRANDS(sequelize, DataTypes);
  const CATEGORY = _CATEGORY(sequelize, DataTypes);
  const ITEM = _ITEM(sequelize, DataTypes);
  const PRODUCT_TYPE = _PRODUCT_TYPE(sequelize, DataTypes);

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
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
