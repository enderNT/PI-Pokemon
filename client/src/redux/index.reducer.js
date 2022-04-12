
const initialState = {
  count: 0,
  results: 0,
  pokemons: [],
  pokemonsFound: [],
}

const rootReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case '@get/pokemons':
      return {
        ...state,
        pokemons: 'hola',
        count: 'adioa',
        results: 'bye'
      }
    case '@search/pokemon':
      return {
        ...state,
        pokemonsFound: payload,
      }
    default:
      return state
  }
}

export default rootReducer
