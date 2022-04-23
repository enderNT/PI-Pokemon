import React, { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getDetail } from '../redux/index.actions'
import '../assets/styles/pokemonDetail.css'
import { typesImages, typesColors } from '../assets/img/pokemonTypes/index.js'

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
          ? <div className='detailLoader'><h3 id='whosPokemon'>Who's Pokemon?...</h3></div>
          :
            <Fragment>
              <h2 id='pokemonNameTitle'>Is {name}!!!</h2>
              <div className='detailBody'
                style={{ 'backgroundColor': `${typesColors[`${Types[0].name}`]}` }}>
                <header className='detailBody__Header'>
                  <h2 id='pokemonAttack'>CP {attack}</h2>
                  <div className='detailBody__HeaderImgContainer'>
                    <img
                      id='pokemonImage__Src'
                      src={`${image}`}
                      alt={`${name}`}
                    />
                  </div>
                </header>
                <main className='detailBody__Main'>
                  <h3 id='pokemonName'>{name}</h3>
                  <h6 id='pokemonHp'>HP: {hp}</h6>
                  <div className='detailBody__MainA'>
                    <div className='detailBody__MainA1'>
                      <h5>Weight: {weight}Kg</h5>
                      <h5>Height: {height}m</h5>
                    </div>
                    <div className='detailBody__MainA2'>
                      <h5>Defense: {defense}</h5>
                      <h5>Speed: {speed}</h5>
                    </div>
                  </div>
                </main>
                <footer className='detailBody__Footer'>
                  <div className='detailBody__FooterContainer'>
                    <div id='typesContainer'>
                      <div id='type1'>
                          <img
                            src={typesImages[`${Types[0].name}`]}
                            alt={Types[0].name}
                          />
                        <h5>{Types[0].name}</h5>
                      </div>
                      {
                      !Types[1]
                        ? null
                        : <div id='type2'>
                          <img
                            src={typesImages[`${Types[1].name}`]}
                            alt={Types[1].name}
                          />
                          <h5>{Types[1].name}</h5>
                        </div>
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
