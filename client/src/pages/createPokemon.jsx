import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearForm, getAllPokemons, handleErrors, handleForm, handleSubmit } from '../redux/index.actions'

const CreatePokemon = () => {
  const dispatch = useDispatch()
  const { pokemon, errors } = useSelector(state => state)

  const idTypes = {
    '1': 'grass',
    '2': 'poison',
    '3': 'fire',
    '4': 'bug',
    '5': 'water',
    '6': 'flying',
    '7': 'normal',
    '8': 'electric',
    '9': 'ground',
    '10': 'fairy',
    '11': 'fighting',
    '12': 'psychic',
    '13': 'rock',
    '14': 'steel',
    '15': 'ice',
    '16': 'ghost',
    '17': 'dragon',
    '18': 'dark'
  }

  useEffect(() => {
    dispatch(getAllPokemons())
    dispatch(clearForm())
  }, [dispatch])

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <header>CREATE YOUR OWN POKEMON</header>
        <main>
          {!errors.name
            ? null
            : <span>The pokemon it already exists</span>
          }
          <label>
            Name
          </label> <input
                      type='text'
                      name='name'
                      onChange={ (e) => dispatch(handleForm(e.target.name, e.target.value)) }
                    />
                    { !pokemon.name
                        ? <label >The name its necessary</label>
                        : null
                    }
          <label>
            HP
          </label> <input
                      type='number'
                      name='hp'
                      onChange={ (e) => dispatch(handleForm(e.target.name, parseInt(e.target.value))) }
                    />
                    { !pokemon.hp
                        ? <label >The hp its necessary</label>
                        : pokemon.hp < 0
                        ? <label>The hp must be greater than or equal 0</label>
                        : null
                    }
          <label>
            ATTACK
          </label> <input
                      type='number'
                      name='attack'
                      onChange={ (e) => dispatch(handleForm(e.target.name, parseInt(e.target.value))) }
                    />
                    { !pokemon.attack
                        ? <label >The attack its necessary</label>
                        : pokemon.attack < 0
                        ? <label>The attack must be greater than or equal 0</label>
                        : null
                    }
          <label>
            DEFENSE
          </label> <input
                      type='number'
                      name='defense'
                      onChange={ (e) => dispatch(handleForm(e.target.name, parseInt(e.target.value))) }
                    />
                    { !pokemon.defense
                        ? <label >The defense its necessary</label>
                        : pokemon.defense < 0
                        ? <label>The defense must be greater than or equal 0</label>
                        : null
                    }
          <label>
            SPEED
          </label> <input
                      type='number'
                      name='speed'
                      onChange={ (e) => dispatch(handleForm(e.target.name, parseInt(e.target.value))) }
                    />
                    { !pokemon.speed
                        ? <label >The speed its necessary</label>
                        : pokemon.speed < 0
                        ? <label>The speed must be greater than or equal 0</label>
                        : null
                    }
          <label>
            WEIGHT
          </label> <input
                      type='number'
                      name='weight'
                      onChange={ (e) => dispatch(handleForm(e.target.name, parseFloat(e.target.value))) }
                    />
                    { !pokemon.weight
                        ? <label >The weight its necessary</label>
                        : pokemon.weight < 0
                        ? <label>The weight must be greater than or equal 0</label>
                        : null
                    }
          <label>
            HEIGHT
          </label> <input
                      type='number'
                      name='height'
                      onChange={ (e) => dispatch(handleForm(e.target.name, parseInt(e.target.value))) }
                    />
                    { !pokemon.height
                        ? <label >The height its necessary</label>
                        : pokemon.height < 0
                        ? <label>The height must be greater than or equal 0</label>
                        : null
                    }
          <label>
            IMAGE
          </label> <input
                      type='text'
                      name='image'
                      onChange={ (e) => dispatch(handleForm(e.target.name, e.target.value)) }
                    />
                    { !pokemon.image
                        ? <label >The image source its necessary</label>
                        : null
                    }
        </main>
        <label>TYPES</label>
        <div>
          <select onChange={e => dispatch(handleForm(e.target.name, parseInt(e.target.value)))}>
            <option name='types' value='1'>grass</option>
            <option name='types' value='2'>poison</option>
            <option name='types' value='3'>fire</option>
            <option name='types' value='4'>bug</option>
            <option name='types' value='5'>water</option>
            <option name='types' value='6'>flying</option>
            <option name='types' value='7'>normal</option>
            <option name='types' value='8'>electric</option>
            <option name='types' value='9'>ground</option>
            <option name='types' value='10'>fairy</option>
            <option name='types' value='11'>fighting</option>
            <option name='types' value='12'>psychic</option>
            <option name='types' value='13'>rock</option>
            <option name='types' value='14'>steel</option>
            <option name='types' value='15'>ice</option>
            <option name='types' value='16'>ghost</option>
            <option name='types' value='17'>dragon</option>
            <option name='types' value='18'>dark</option>
          </select>
        </div>
        <footer>
          <ul>
            {
              pokemon.types.length === 0
                ? null
                : pokemon.types.map((t) => (
                  <label>
                    { idTypes[`${t}`] }
                  </label>
                ))
            }
          </ul>
          <div>
            <button onClick={() => dispatch(handleSubmit(pokemon.name))}>
              Create
            </button>
          </div>
        </footer>
      </form>
    </div>
  )
}

export default CreatePokemon
