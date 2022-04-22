import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/pokemonCard.css'

const PokemonCard = ({ id, name, attack, image }) => {
  return (
    <div className='pokemonCard'>
      <header className='pokemonCard__Header'>{attack}CP</header>
      <main className='pokemonCard__Main'>
        {image.includes('google')
          ? <div className='pokemonCard__ImageContainer'>
            <img
                id='pokemonImage'
                src='https://images.pexels.com/photos/10500651/pexels-photo-10500651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
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