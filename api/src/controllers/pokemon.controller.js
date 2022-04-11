const {
  getAllPokemons, createPokemon,
  getByName, getDetail
} = require('../services/pokemons.services')

const STATUS = {
  'ok': 200,
  'created': 201,
  'accepted': 202,
  'bad-request': 400
}

const orders = {
  'nameASC': ['name', 'ASC'],
  'nameDESC': ['name', 'DESC'],
  'attackASC': ['attack', 'ASC'],
  'attackDESC': ['attack', 'DESC'],
}
const orderedDefault=['id', 'ASC']

module.exports = {
  async getPokemons(req, res) {
    const { page, ordered, name } = req.query
    const offset = (parseInt(page || 1)-1)*12
    const response = !name
    ? await getAllPokemons(orders[ordered] || orderedDefault, offset)
    : await getByName(name)
    if (response.detail) {
      res.status(STATUS['bad-request']).json(response)
    } else {
      res.status(STATUS['ok']).json(response)
    }
  },
  async createAPokemon(req, res){
    const pokemon = req.body
    if(!Array.isArray(pokemon.types) || pokemon.types.length === 0) {
      res.status(STATUS['bad-request']).json({ Error: 'Types its necessary' })
    } else {
      const check = pokemon.types.every((x) => typeof x === 'number' )
      if (!check) {
        res.status(STATUS['bad-request']).json({ Error: 'Types must be a number of arrays' })
      } else {
        const response = await createPokemon(pokemon)
        if(response.Error) {
          res.status(STATUS['bad-request']).json(response)
        } else {
          res.status(STATUS['created']).json(response)
        }
      }
    }
  },
  async pokemonDetailed(req, res){
    const { id } = req.params
    const response = await getDetail(parseInt(id))
    if (response.detail) {
      res.status(STATUS['bad-request']).json(response)
    } else {
      res.status(STATUS['ok']).json(response)
    }
  }
}