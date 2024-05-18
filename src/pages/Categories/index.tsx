import { Game } from '../Home'
import ProductList from '../../components/ProductsList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import fifa from '../../assets/images/fifa.svg'
import streetFighter from '../../assets/images/streetfigth.png'
import { useEffect, useState } from 'react'

import {
  useGetActionGameQuery,
  useGetFightGameQuery,
  useGetRPGGameQuery,
  useGetSimulationGameQuery,
  useGetSportsGameQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGame } = useGetActionGameQuery()
  const { data: sportsGame } = useGetSportsGameQuery()
  const { data: fightGame } = useGetFightGameQuery()
  const { data: rpgGame } = useGetRPGGameQuery()
  const { data: simulationGame } = useGetSimulationGameQuery()

  if (actionGame && sportsGame && fightGame && rpgGame && simulationGame) {
    return (
      <>
        <ProductList games={actionGame} title="Ação" background="black" />
        <ProductList games={sportsGame} title="Esports" background="gray" />
        <ProductList games={fightGame} title="Luta" background="black" />
        <ProductList games={rpgGame} title="RPG" background="gray" />
        <ProductList
          games={simulationGame}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h2>Carregando...</h2>
}

export default Categories
