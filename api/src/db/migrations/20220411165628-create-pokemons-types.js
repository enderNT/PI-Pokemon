'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pokemons_Types', {
      PokemonId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      TypeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
    }, {
      freezeTableName: true,
      timestamps: false,
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pokemons_Types')
  }
}