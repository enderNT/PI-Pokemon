'use strict'
const pokemons_types = require('../data/pokemons_types')

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {})
    */
    await queryInterface.bulkInsert('Pokemons_Types', pokemons_types, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {})
     */
    await queryInterface.bulkDelete('Pokemons_Types', null, {})
  }
}
