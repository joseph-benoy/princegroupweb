import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ITEM extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    PRICE: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    BRAND_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'BRANDS',
        key: 'ID'
      },
      onDelete: 'cascade'
    },
    PRODUCT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PRODUCT_TYPE',
        key: 'ID'
      }
      ,onDelete: 'cascade'

    },
    DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    IMAGE_PATH: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ITEM',
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
        name: "fk_item_1",
        using: "BTREE",
        fields: [
          { name: "BRAND_ID" },
        ]
      },
      {
        name: "fk_item_2",
        using: "BTREE",
        fields: [
          { name: "PRODUCT_ID" },
        ]
      },
    ]
  });
  }
}
