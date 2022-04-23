import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/pokemonCard.css'
import pokeball from '../assets/img/pokeball.svg'

const PokemonCard = ({ id, name, attack, image }) => {
  return (
    <div className='pokemonCard'>
      <header className='pokemonCard__Header'>CP {attack}</header>
      <main className='pokemonCard__Main'>
        {image.includes('google')
          ? <div className='pokemonCard__ImageContainer'>
            <img
                id='pokemonImage'
                src={pokeball}
                alt={`${name}`}
              />
          </div>
          : <div className='pokemonCard__ImageContainer'>
            <img
                id='pokemonImage'
                src={`${image}`}
                alt={`${name}`}
              />
          </div>
        }
      </main>
      <footer>
        <Link to={`/pokemon/${id}`}>{name}</Link>
      </footer>
    </div>
  )
}

export default PokemonCard