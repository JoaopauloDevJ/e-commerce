import ProductList from '../../components/ProductsList'

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
        <ProductList
          games={actionGame}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductList
          games={sportsGame}
          title="Esports"
          background="gray"
          id="sports"
        />
        <ProductList
          games={fightGame}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductList games={rpgGame} title="RPG" background="gray" id="rpg" />
        <ProductList
          games={simulationGame}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }

  return <h2>Carregando...</h2>
}

export default Categories
