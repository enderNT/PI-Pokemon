import axios from 'axios'

export const getAllPokemons = (page=1, order='idASC' ) => {
  return async (dispatch) => {
    const response = await axios.get(`/pokemons?page=${page}&ordered=${order}`)
    const payload = response.data
    dispatch({
      type: '@get/pokemons',
      payload,
    })
  }
}

export const orderBy = (order) => {
  return {
    type: '@order/pokemons',
    payload: order
  }
}

export const filterBy = (filter) => {
  return {
    type: '@filter/pokemons',
    payload: filter,
  }
}

export const searchByName = (name) => {
  return async (dispatch) => {
    const response = await axios.get(`/pokemons?name=${name}`)
    const payload = response.data
    dispatch({
      type: '@search/pokemon',
      payload,
    })
  }
}

export const filterByTypes = (type, page=1) => {
  return async (dispatch) => {
    const response = await axios.get(`/types?filter=${type}`)
    const payload = response.data
    const { count, pokemons } = payload
    const [data] = pokemons
    dispatch({
      type: '@filter/types',
      payload: {count, data, page}
    })
  }
}

//!FILTRAR POR POKEMONES CREADOS

export const getDetail = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/pokemons/${id}`)
    const payload = response.data
    dispatch({
      type: '@getDetail/pokemons',
      payload,
    })
  }
}
