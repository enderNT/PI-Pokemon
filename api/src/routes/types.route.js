const { Router } = require('express')
const { Op } = require('sequelize')
const { Pokemons, Types } = require('../db/models/index')
const type_route = Router()

type_route.get('/', async (req, res) => {
  const { filter, page } = req.query
  const offset = (parseInt(page || 1)-1)*12
  if (filter) {
    const { count, rows } = filter === 'created'
    ? await Pokemons.findAndCountAll({ where: { id: { [Op.gt]: 300 } }, include: Types })
    : await Types.findAndCountAll({ where: { name: `${filter}` }, include: Pokemons, })
    res.status(rows.length === 0 ? 400 : 200)
    .json(rows.length === 0 ? { detail: 'Nothing be found' }
    :{
      results: rows.length,
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
