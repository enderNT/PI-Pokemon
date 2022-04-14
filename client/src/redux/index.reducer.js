
const initialState = {
  count: 0,
  results: 0,
  pokemons: [],
  pages: 0,
  order: 'idASC',
  filter: 'all',
  pokemonsFound: [], //!Sin slice
  // pokemonsFiltered: [], //!Sin slice
  pokemonDetailed: {},
}

const rootReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case '@get/pokemons':
      return {
        ...state,
        pages: Math.ceil(payload.count)/12,
        pokemons: payload.pokemons,
        count: payload.count,
        results: payload.results,
      }
    case '@search/pokemon':
      return {
        ...state,
        pokemonsFound: payload.pokemons,
      }
    case '@filter/types':
      return {
        ...state,
        count: payload.count,
        pokemons: payload.data.Pokemons.slice((payload.page-1)*12, payload.page*12),
      }
    case '@filter/pokemons':
      console.log(payload)
      return {
        ...state,
        filter: payload
      }
    case '@getDetail/pokemons':
      return {
        ...state,
        pokemonDetailed: payload,
      }
    case '@order/pokemons':
      return {
        ...state,
        order: payload
      }
    default:
      return state
  }
}

export default rootReducer
