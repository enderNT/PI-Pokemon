import React from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({ id, name, hp, attack, defense, speed, weight, height, image }) => {
  return (
    <div>
      <header>{attack}CP</header>
      <main>
        <img
          src={`${image}`}
          alt={`${name}`}
        />
      </main>
      <footer>
        <Link to={`/pokemon/${id}`}>{name}</Link>
      </footer>
    </div>
  )
}

export default PokemonCard