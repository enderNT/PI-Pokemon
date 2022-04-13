import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { filterByTypes, getAllPokemons, searchByName } from '../redux/index.actions'
import ContentPage from '../components/contentPage'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

const Pokedex = () => {
  const { page } = useParams()
  const { pages, order } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPokemons(parseInt(page), order))
  }, [dispatch, page, order])

  return (
    <div>
      <header>Pokedex v1.0.0</header>
      <div>
        <div>
          <div>
            <select
            name='order'
            onChange={
              (e) => dispatch(getAllPokemons(parseInt(page), e.target.value))}>
                {/* REPENSAR LA ESTRUCTURA YA QUE useEffect ESTA HACIENDO CASI TODO */}
              <option
                value='nameASC'>nameASC</option>
              <option
                value='nameDESC'>nameDESC</option>
            </select>
            <select
              name='filter'
              onChange={(e) => dispatch(filterByTypes(e.target.value))}>
              <option value='grass'>grass</option>
              <option value='poison'>poison</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder='metapod...'
              onChange={(e) => dispatch(searchByName(e.target.value))}
            />
          </div>
        </div>
        <div>
          <ContentPage />
        </div>
      </div>
      <footer>
        <div>
          { Number(page) >= 2 && <button
            onClick={() => dispatch(getAllPokemons(parseInt(page), order))}>Prev</button> }
          { Number(page) < pages && <button>Next</button> }
        </div>
      </footer>
    </div>
  )
}

export default Pokedex
