import React, { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getDetail } from '../redux/index.actions'
import '../assets/styles/pokemonDetail.css'

const DetailPokemon = () => {
  const { id } = useParams()
  const { pokemonDetailed } = useSelector(state => state)
  const dispatch = useDispatch()

  const {
    name, hp, attack,
    defense, speed, weight, height,
    image, Types
  } = pokemonDetailed

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

  return (
    <div className='detail'>
      {
        pokemonDetailed.id !== parseInt(id)
          ? <strong>Who's Pokemon?...</strong>
          :
            <Fragment>
              <h2 id='pokemonName'>Is {name}!!!</h2>
              <div className='detailBody'>
                <header className='detailBody__Header'>
                  <h2>CP {attack}</h2>
                </header>
                <main className='detailBody__Main'>
                  <div className='detailBody__MainImgContainer'>
                    <img
                      id='pokemonImage__Src'
                      src={`${image}`}
                      alt={`${name}`}
                    />
                  </div>
                  <strong>{name}</strong>
                  <div>
                    <h5>HP: {hp}</h5>
                    <h5>Defense: {defense}</h5>
                    <h5>Speed: {speed}</h5>
                  </div>
                  <div>
                    <h5>Weight: {weight}</h5>
                    <h5>Height: {height}</h5>
                  </div>
                </main>
                <footer className='detailBody__Footer'>
                  <br />
                  <div clasName='detailBody__FooterContainer'>
                    <h4>Types</h4>
                    <div id='typesContainer'>
                      <h5>{Types[0].name}</h5>
                      {
                      !Types[1]
                        ? null
                        : <h5>{Types[1].name}</h5>
                      }
                    </div>
                  </div>
                </footer>
              </div>
            </Fragment>
      }
    </div>
  )
}

export default DetailPokemon
