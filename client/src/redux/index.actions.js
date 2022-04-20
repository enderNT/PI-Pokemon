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
    payload: order,
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

export const clearForm = () => {
  return {
    type: '@clear/form',
    payload: {
      name: '',
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      weight: 0,
      height: 0,
      image: '',
      types: [],
    },
  }
}

export const handleForm = (target, value) => {
  return {
    type: '@handle/form',
    payload: { target, value }
  }
}

export const handleSubmit = (pokemon) => {
  return async dispatch => {
    try {
      await axios.get(`/pokemons?name=${pokemon.name}`)
      dispatch({
        type: '@handle/submit',
        payload: 'Error',
      })
    } catch (error) {
      const res = await axios.post('/pokemons', pokemon)
      dispatch({
        type: '@handle/submit',
        payload: { status: 404, res },
      })
    }
  }
}

export const handleErrors = (attributeError, value) => {
  return {
    type: '@handle/error',
    payload: { attributeError, value},
  }
}

export const setCreated = (bool) => {
  return {
    type: '@set/created',
    payload: bool,
  }
}
