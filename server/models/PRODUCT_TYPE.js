import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class PRODUCT_TYPE extends Model {
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
    SUBCAT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SUB_CATEGORY',
        key: 'ID'
      },
      onDelete: 'cascade'
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
        name: "SUBCAT_ID",
        using: "BTREE",
        fields: [
          { name: "SUBCAT_ID" },
        ]
      },
    ]
  });
  }
}
