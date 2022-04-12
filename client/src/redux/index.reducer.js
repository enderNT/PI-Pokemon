
const initialState = {
  pokemons: []
}

const rootReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case '@getAllPokemons':
      return {
        ...state,
        pokemons: payload
      }
    default:
      return state
  }
}

export default rootReducer
