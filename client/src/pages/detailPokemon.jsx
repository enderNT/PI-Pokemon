import React, { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getDetail } from '../redux/index.actions'

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
    <div>
      {
        pokemonDetailed.id !== parseInt(id)
          ? <strong>Who's Pokemon?...</strong>
          :
            <Fragment>
              <h2>is {name}!!!</h2>
              <div>
                <header>
                  <h2>{attack}CP</h2>
                </header>
                <main>
                  <div>
                    <img
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
                <footer>
                  <div>
                    <h4>Types</h4>
                    <h5>{Types[0].name}</h5>
                    {
                    !Types[1]
                      ? null
                      : <h5>{Types[1].name}</h5>
                    }
                  </div>
                </footer>
              </div>
            </Fragment>
      }
    </div>
  )
}

export default DetailPokemon
