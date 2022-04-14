import React from 'react'
import PokemonCard from './pokemonCard'
import { useSelector } from 'react-redux'

const ContentPage = () => {
  const { pokemons } = useSelector(state => state)

  return (
    <ul>
      {
        pokemons.length === 0
          ? <strong>Loading...</strong>
          : pokemons.map((d) => {
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
  )
}

export default ContentPage
