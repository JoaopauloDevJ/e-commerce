import { Game } from '../Home'
import ProductList from '../../components/ProductsList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import fifa from '../../assets/images/fifa.svg'
import streetFighter from '../../assets/images/streetfigth.png'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gameAcao, setGameAcao] = useState<Game[]>([])
  const [gameEsports, setGameEsports] = useState<Game[]>([])
  const [gameSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gameRPG, setGameRPG] = useState<Game[]>([])
  const [gameLuta, setGameLuta] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsports(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRPG(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))
  }, [])

  return (
    <>
      <ProductList games={gameAcao} title="Ação" background="black" />
      <ProductList games={gameEsports} title="Esports" background="gray" />
      <ProductList games={gameLuta} title="Luta" background="black" />
      <ProductList games={gameRPG} title="RPG" background="gray" />
      <ProductList games={gameSimulacao} title="Simulação" background="black" />
    </>
  )
}

export default Categories
