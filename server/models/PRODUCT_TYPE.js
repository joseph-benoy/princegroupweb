const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return PRODUCT_TYPE.init(sequelize, DataTypes);
}

class PRODUCT_TYPE extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CATEGORY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CATEGORY',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'PRODUCT_TYPE',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "PRODUCT_TYPE",
        using: "BTREE",
        fields: [
          { name: "CATEGORY_ID" },
        ]
      },
    ]
  });
  }
}
