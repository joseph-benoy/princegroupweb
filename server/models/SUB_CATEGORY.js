import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class SUB_CATEGORY extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: "NAME"
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
    tableName: 'SUB_CATEGORY',
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
        name: "NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NAME" },
        ]
      },
      {
        name: "CATEGORY_ID",
        using: "BTREE",
        fields: [
          { name: "CATEGORY_ID" },
        ]
      },
    ]
  });
  }
}
