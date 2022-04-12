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
