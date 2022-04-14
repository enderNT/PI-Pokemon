import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/img/bulbasaurPixelArt.png'

const NavBar = () => (
    <div className='navBar'>
      <div className='navBar__Left'>
        <Link to='/'>
          <div>
            <img
              src='www.google.com'
              alt='Bulbasaur'
            />
          </div>
        </Link>
      </div>
      <div>
        <span>Pokedex v1.0.0</span>
      </div>
      <ul className='navBar__Right'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/pokedex/1'>
          <li>Pokedex</li>
        </Link>
        <Link to='/createPokemon'>
          <li>Create a pokemon</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
      </ul>
    </div>
  )

export default NavBar
