const { Router } = require('express')
const pokemon_route = Router()

pokemon_route.get('/')
pokemon_route.get('/:id')
pokemon_route.post('/')

module.exports = pokemon_route
