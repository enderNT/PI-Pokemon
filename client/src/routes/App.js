
import { Routes, Route } from 'react-router'
import AllPokemons from '../pages/pokemons'
import Home from '../pages/home'
import CreatePokemon from '../pages/createPokemon'

const App = () => (
  <Routes>
    <Route path='/' element={ <Home /> }/>
    <Route path='/allPokemons' element={ <AllPokemons /> }/>
    <Route path='/createPokemon' element={ <CreatePokemon /> }/>
  </Routes>
)

export default App
