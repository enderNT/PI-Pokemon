'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Pokemons_Types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemons_Types.init({
    PokemonId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    TypeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Pokemons_Types',
    timestamps: false,
  })
  return Pokemons_Types
}