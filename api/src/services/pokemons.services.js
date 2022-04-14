const { Op } = require('sequelize')
const { Pokemons, Types } = require('../db/models/index').sequelize.models

module.exports = {
  async getAllPokemons(ordered, offset){
    const {count, rows} = await Pokemons.findAndCountAll({ order: [ordered],
      limit: 12,
      offset,
    })
    if(rows.length === 0) {
      return { detail: 'Nothing be found' }
    } else {
      return {
        count: count,
        results: rows.length,
        pokemons: rows,
      }
    }
  },
  async createPokemon(pokemon){
    const { count } = await Pokemons.findAndCountAll()
    let identifier = count
    const { name, hp, attack,
    defense, speed, height, weight,
    image, types } = pokemon
    const check = types.some((x) => x <= 0 || x > 19)
    if (check) {
      return { Error: 'Rage of types is between 1 and 19' }
    } else {
      try {
        const pokemonCreated = await Pokemons.create({
          id: ++identifier, name, hp, attack,
          defense, speed, height,
          weight, image, types
        })
        await pokemonCreated.addTypes(types)
        const resultPokemonsI = await pokemonCreated.getTypes()
        return { ...pokemonCreated.toJSON(), diets: resultPokemonsI }
      } catch (error) {
        const { errors } = error
        const { message, path, type, value } = errors[0]
        return { Error: `${type}`, Message: ` '${path}' ${message} `, Value: value }
      }
    }
  },
  async getByName(name){
    const { count, rows } = await Pokemons.findAndCountAll({ where: { name: { [Op.iRegexp]: `${name}` } } })
    if(rows.length === 0) {
      return { detail: 'Nothing be found' }
    } else {
      return {
        results: count,
        pokemons: rows,
      }
    }
  },
  async getDetail(id){
    const pokemon = await Pokemons.findByPk(id, { include: Types })
    if (!pokemon) {
      return { detail: 'Nothing be found' }
    } else {
      return pokemon
    }
  }
}
