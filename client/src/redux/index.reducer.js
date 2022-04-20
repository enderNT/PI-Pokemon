const initialState = {
  count: 0,
  results: 0,
  pokemons: [],
  pages: 0,
  order: 'idASC',
  filter: 'all',
  pokemonsFound: [], //!Sin slice
  pokemon: {
    "name": "",
    "hp": 0,
    "attack": 0,
    "defense": 0,
    "speed": 0,
    "weight": 0,
    "height": 0,
    "image": "",
    "types": [],
  },
  pokemonDetailed: {},
  errors: {
    created: false,
    name: false,
  },
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
      return {
        ...state,
        filter: payload,
      }
    case '@getDetail/pokemons':
      return {
        ...state,
        pokemonDetailed: payload,
      }
    case '@order/pokemons':
      return {
        ...state,
        order: payload,
      }
    case '@clear/form':
      return {
        ...state,
        pokemon: payload,
      }
    case '@handle/form':
      const result = state.pokemon.types.includes(payload.value)
        ? state
        : !payload.target
          ? { ...state,
                pokemon: {
                  ...state.pokemon,
                  types: state.pokemon.types.concat(payload.value)
                }
            }
          : {...state,
                pokemon: {...state.pokemon, [payload.target]: payload.value}
            }
      return result
    case '@handle/submit':
      if (payload.status === 404) {
        return {
          ...state,
          errors: {
            ...state.errors,
            name: false,
            created: true,
          }
        }
      } else {
        return {
          ...state,
          errors: {
            ...state.errors,
            name: true,
            created: false,
          }
        }
      }
    case '@handle/error':
      return {
        ...state,
        errors: {
          ...state.errors,
          [payload.attributeError]: payload.value
        }
      }
    case '@set/created':
      return {
        ...state,
        errors: {
          ...state.errors,
          created: payload,
        }
      }
    default:
      return state
  }
}

export default rootReducer
