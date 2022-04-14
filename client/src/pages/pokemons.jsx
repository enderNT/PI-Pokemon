import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ContentPage from '../components/contentPage'
import {
  filterByTypes, getAllPokemons, orderBy,
  searchByName,
} from '../redux/index.actions'

const Pokedex = () => {
  const { page } = useParams()
  const { pages, order } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPokemons(parseInt(page), order))
  }, [dispatch, page, order])

  return (
    <div>
      <div>
        <div>
          <div>
            <select
            name='order'
            onChange={
              (e) => dispatch(orderBy(e.target.value))}>
              <option
                value='nameASC'>nameASC</option>
              <option
                value='nameDESC'>nameDESC</option>
              <option
                value='attackASC'>attackASC</option>
              <option
                value='attackDESC'>attackDESC</option>
            </select>
            <select
              name='filter'
              onChange={(e) => dispatch(filterByTypes(e.target.value))}>
                <option value='created'>created</option>
                <option value='grass'>grass</option>
                <option value='poison'>poison</option>
                <option value='fire'>fire</option>
                <option value='bug'>bug</option>
                <option value='water'>water</option>
                <option value='flying'>flying</option>
                <option value='normal'>normal</option>
                <option value='electric'>electric</option>
                <option value='ground'>ground</option>
                <option value='fairy'>fairy</option>
                <option value='fighting'>fighting</option>
                <option value='psychic'>psychic</option>
                <option value='rock'>rock</option>
                <option value='steel'>steel</option>
                <option value='ice'>ice</option>
                <option value='ghost'>ghost</option>
                <option value='dragon'>dragon</option>
                <option value='dark'>dark</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder='metapod...'
              onChange={(e) => dispatch(searchByName(e.target.value))}
            />
            <div>
              <Link to={`/results`}>
                <img
                  src='www.google.com'
                  alt='search-icon'
                />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <ContentPage />
        </div>
      </div>
      <footer>
        <div>
          { Number(page) >= 2
          && <button>
              <Link to={`/pokedex/${Number(page)-1}`}>Prev</Link>
            </button> }
          { Number(page) < pages
          && <button>
              <Link to={`/pokedex/${Number(page)+1}`}>Next</Link>
            </button> }
        </div>
      </footer>
    </div>
  )
}

export default Pokedex
