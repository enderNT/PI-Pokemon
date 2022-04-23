import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/bulbasaurPixelArt.png'
import '../assets/styles/navBar.css'

const NavBar = () => (
    <nav className='navBar'>
      <div className='navBar__Left'>
        <Link to='/'>
          <div className='navBar__LeftLogo'>
            <img
              className='logoBulbasaur'
              src={logo}
              alt='Bulbasaur'
            />
          </div>
        </Link>
      </div>
      <div className='navBar__Center'>
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
      </ul>
    </nav>
  )

export default NavBar
