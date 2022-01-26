import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class BRANDS extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "NAME"
    }
  }, {
    sequelize,
    tableName: 'BRANDS',
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
    ]
  });
  }
}
