
import { Routes, Route } from 'react-router'
import Pokedex from '../pages/pokemons'
import Home from '../pages/home'
import CreatePokemon from '../pages/createPokemon'
import { Fragment } from 'react'
import NavBar from '../components/navBar'
import DetailPokemon from '../pages/detailPokemon'
import Results from '../pages/results'

const App = () => (
  <Fragment>
    <NavBar />
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/pokedex/:page' element={ <Pokedex /> }/>
      <Route path='/createPokemon' element={ <CreatePokemon /> }/>
      <Route path='/pokemon/:id' element={ <DetailPokemon /> } />
      <Route path='/results' element={ <Results /> } />
    </Routes>
  </Fragment>
)

export default App
