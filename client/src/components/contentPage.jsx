import React from 'react'
import PokemonCard from './pokemonCard'
import { useSelector } from 'react-redux'
import '../assets/styles/contentPage.css'

const ContentPage = () => {
  const { pokemons } = useSelector(state => state)

  return (
    <ul className='contentPage'>
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
              <li id='pokemonCard__Container' key={id}>
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
