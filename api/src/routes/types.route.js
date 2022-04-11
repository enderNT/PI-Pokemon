const { Router } = require('express')
const { Pokemons, Types } = require('../db/models/index')
const type_route = Router()

type_route.get('/', async (req, res) => {
  const { filter } = req.query
  if (filter) {
    const { count, rows } = await Types.findAndCountAll({ where: { name: `${filter}` }, include: Pokemons })
    res.status(rows.length === 0 ? 400 : 200)
    .json(rows.length === 0 ? { detail: 'Nothing be found' }
    :{
      count,
      pokemons: rows
    })
  } else {
    const { count, rows } = await Types.findAndCountAll()
    res.status(200).json({
      count,
      types: rows
    })
  }
})

module.exports = type_route
