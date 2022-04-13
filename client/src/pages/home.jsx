import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPokemons } from '../redux/index.actions.js'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch])
  
  return (
      <div>
        Home
      </div>
  )
}

export default Home