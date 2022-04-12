import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPokemons } from '../redux/index.actions'

const Home = () => {
  const dispatch = useDispatch()
  const { pokemons } = useSelector(state => state)
  useEffect(() => {
    dispatch(getAllPokemons)
  }, [dispatch, pokemons])
  
  return (
    <Fragment>
      <div>
        Hola

      </div>
    </Fragment>
  )
}

export default Home