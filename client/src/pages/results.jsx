import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PokemonCard from '../components/pokemonCard'
import { searchByName } from '../redux/index.actions'

const Results = () => {
  const { pokemonsFound } = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
            <input
              type="text"
              placeholder='metapod...'
              onChange={(e) => dispatch(searchByName(e.target.value))}
            />
          </div>
      <ul>
        {
          pokemonsFound.length === 0
            ? <h2>Nothing be found</h2>
            : pokemonsFound.map((d) => {
              const {
                id, name, hp,
                attack, defense, speed,
                weight, height, image
              } = d
              return (
                <li key={id}>
                  <PokemonCard 
                    id={id}
                    name={name}
                    hp={hp}
                    attack={attack}
                    defense={defense}
                    speed={speed}
                    weight={weight}
                    height={height}
                    image={image}
                  />
                </li>
              )
            })
        }
      </ul>
    </div>
  )
}

export default Results
