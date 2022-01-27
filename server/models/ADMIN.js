import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ADMIN extends Model {
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
      allowNull: false
    },
    EMAIL: {
      type: DataTypes.STRING(320),
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.BLOB,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ADMIN',
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
    ]
  });
  }
}
