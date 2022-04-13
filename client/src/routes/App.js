
import { Routes, Route } from 'react-router'
import Pokedex from '../pages/pokemons'
import Home from '../pages/home'
import CreatePokemon from '../pages/createPokemon'
import About from '../pages/about'
import { Fragment } from 'react'
import NavBar from '../components/navBar'
import DetailPokemon from '../pages/detailPokemon'

const App = () => (
  <Fragment>
    <NavBar />
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/pokedex/:page' element={ <Pokedex /> }/>
      <Route path='/createPokemon' element={ <CreatePokemon /> }/>
      <Route path='/about' element={ <About /> } />
      <Route path='/pokemon/:id' element={ <DetailPokemon /> } />
    </Routes>
  </Fragment>
)

export default App
