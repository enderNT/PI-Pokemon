import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PokemonCard from '../components/pokemonCard'
import { searchByName } from '../redux/index.actions'
import '../assets/styles/results.css'

const Results = () => {
  const { pokemonsFound } = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className='results'>
      <div className='results__InputSearch'>
            <input
              type="text"
              placeholder='metapod...'
              onChange={(e) => dispatch(searchByName(e.target.value))}
            />
      </div>
      <ul className='results__ContentPage'>
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
                <li id='pokemonCard__ContainerResults' key={id}>
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
