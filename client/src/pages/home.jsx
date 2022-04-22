import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPokemons } from '../redux/index.actions.js'
import '../assets/styles/home.css'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPokemons())
  }, [dispatch])

  return (
      <div className='home'>
      </div>
  )
}

export default Home
