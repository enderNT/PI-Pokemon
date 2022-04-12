import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPokemons } from '../redux/index.actions.js'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch])
  
  return (
    <Fragment>
      <div>
        Hola
      </div>
    </Fragment>
  )
}

export default Home