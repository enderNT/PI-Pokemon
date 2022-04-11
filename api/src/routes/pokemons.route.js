const { Router } = require('express')
const pokemon_route = Router()
const pokemons_controller = require('../controllers/pokemon.controller')

pokemon_route.get('/', pokemons_controller.getPokemons)
pokemon_route.get('/:id', pokemons_controller.pokemonDetailed)
pokemon_route.post('/', pokemons_controller.createAPokemon)

module.exports = pokemon_route
