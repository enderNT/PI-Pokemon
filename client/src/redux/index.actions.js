import axios from 'axios'

export const getAllPokemons = () => {
  return async (dispatch) => {
    const data = await axios.get('/pokemons')
    console.log(data)
    dispatch({
      type: '@getAllPokemons',
      payload: data
    })
  }
}
