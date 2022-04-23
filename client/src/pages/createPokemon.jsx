import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearForm, getAllPokemons, handleForm, handleSubmit } from '../redux/index.actions'
import '../assets/styles/createPokemon.css'

const CreatePokemon = () => {
  const dispatch = useDispatch()
  const { pokemon, errors } = useSelector(state => state)
  const { created } = errors

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
    <div className='createPokemon'>
      {created
        ? <span id='created'>Pokemon Created</span>
        : null
      }
      <form onSubmit={e => e.preventDefault()} className='createPokemon__form'>
        <header>
          <label>Pokemon Register</label>
        </header>
        <main className='createPokemon__Main'>
          {!errors.name
            ? null
            : <span>The pokemon it already exists</span>
          }
          <br />
          <div id='addName'>
            <label>
              Name
            </label> <br />
            <input
              placeholder='Lugia...'
              type='text'
              name='name'
              onChange={ (e) => dispatch(handleForm(e.target.name, e.target.value)) }
            />
                      { !pokemon.name
                          ? <span>The name its necessary</span>
                          : null
                      }
          </div>
          <br />
          <div id='addHp'>
            <label>
              HP
            </label> <br />
            <input
              placeholder='500'
              type='number'
              name='hp'
              onChange={ (e) => dispatch(handleForm(e.target.name, parseInt(e.target.value))) }
            />
                      { !pokemon.hp
                          ? <span>The hp its necessary</span>
                          : pokemon.hp < 0
                          ? <span>The hp must be greater than or equal 0</span>
                          : null
                      }
          </div>
          <br />
          <div id='addAttack'>
            <label>
              ATTACK
            </label> <br />
            <input
              placeholder='120'
              type='number'
              name='attack'
              onChange={ (e) => dispatch(handleForm(e.target.name, parseInt(e.target.value))) }
            />
                      { !pokemon.attack
                          ? <span>The attack its necessary</span>
                          : pokemon.attack < 0
                          ? <span>The attack must be greater than or equal 0</span>
                          : null
                      }
          </div>
          <div id='addDefense'>
            <br />
            <label>
              DEFENSE
            </label> <br />
            <input
              placeholder='100'
              type='number'
              name='defense'
              onChange={ (e) => dispatch(handleForm(e.target.name, parseInt(e.target.value))) }
            />
                      { !pokemon.defense
                          ? <span>The defense its necessary</span>
                          : pokemon.defense < 0
                          ? <span>The defense must be greater than or equal 0</span>
                          : null
                      }
          </div>
          <br />
          <div>
            <label>
              SPEED
            </label> <br />
            <input
              placeholder='15'
              type='number'
              name='speed'
              onChange={ (e) => dispatch(handleForm(e.target.name, parseInt(e.target.value))) }
            />
                      { !pokemon.speed
                          ? <span>The speed its necessary</span>
                          : pokemon.speed < 0
                          ? <span>The speed must be greater than or equal 0</span>
                          : null
                      }
          </div>
          <br />
          <div>
            <label>
              WEIGHT
            </label> <br />
            <input
              placeholder='80'
              type='number'
              name='weight'
              onChange={ (e) => dispatch(handleForm(e.target.name, parseFloat(e.target.value))) }
            />
                      { !pokemon.weight
                          ? <span>The weight its necessary</span>
                          : pokemon.weight < 0
                          ? <span>The weight must be greater than or equal 0</span>
                          : null
                      }
          </div>
          <br />
          <div>
            <label>
              HEIGHT
            </label> <br />
            <input
              placeholder='20'
              type='number'
              name='height'
              onChange={ (e) => dispatch(handleForm(e.target.name, parseInt(e.target.value))) }
            />
                      { !pokemon.height
                          ? <span>The height its necessary</span>
                          : pokemon.height < 0
                          ? <span>The height must be greater than or equal 0</span>
                          : null
                      }
          </div>
          <br />
          <div>
            <label>
              IMAGE
            </label> <br />
            <input
            placeholder='www.assests.com/pokemonX'
              type='text'
              name='image'
              onChange={ (e) => dispatch(handleForm(e.target.name, e.target.value)) }
            />
                      { !pokemon.image
                          ? <span>The image source its necessary</span>
                          : null
                      }
          </div>
          <br />
          <br />
        <label>TYPES</label> <br />
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
        </main>
        <footer className='createPokemon__Footer'>
          <ul id='pokemonTypesSelected'>
            {
              pokemon.types.length === 0
                ? null
                : pokemon.types.map((t) => (
                  <Fragment>
                  <label key={idTypes[`${t}`]}>
                    { idTypes[`${t}`] }
                  </label> <br />
                  </Fragment>
                ))
            }
          </ul>
          {pokemon.types.length === 0
            ? <span id='warningTypes'>At least a type must be added</span>
            : null

          }
            {!pokemon.name || errors.name || !pokemon.hp || pokemon.hp < 0 || !pokemon.attack || pokemon.attack < 0 || !pokemon.defense || pokemon.defense < 0 || !pokemon.speed || pokemon.speed < 0 || !pokemon.weight || pokemon.weight < 0 || !pokemon.height || pokemon.height < 0 || !pokemon.image || pokemon.types.length === 0
              ? <input
                  type='submit'
                  disabled
                  value='Submit'
                />
              : <input
                  value='Submit'
                  type='submit'
                  onClick={() => dispatch(handleSubmit(pokemon))}
                />
            }
        </footer>
      </form>
    </div>
  )
}

export default CreatePokemon
