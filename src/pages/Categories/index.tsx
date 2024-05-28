import ProductList from '../../components/ProductsList'

import {
  useGetActionGameQuery,
  useGetFightGameQuery,
  useGetRPGGameQuery,
  useGetSimulationGameQuery,
  useGetSportsGameQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGame, isLoading: isLoadingAction } =
    useGetActionGameQuery()
  const { data: sportsGame, isLoading: isLoadingSports } =
    useGetSportsGameQuery()
  const { data: fightGame, isLoading: isLoadingFight } = useGetFightGameQuery()
  const { data: rpgGame, isLoading: isLoadingRPG } = useGetRPGGameQuery()
  const { data: simulationGame, isLoading: isLoadingSimulation } =
    useGetSimulationGameQuery()

  return (
    <>
      <ProductList
        games={actionGame}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={sportsGame}
        title="Esports"
        background="gray"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductList
        games={fightGame}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductList
        games={rpgGame}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductList
        games={simulationGame}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
