import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import Game from '../../models/game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import fifa from '../../assets/images/fifa.svg'
import streetFighter from '../../assets/images/streetfigth.png'

const promocao: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'PS4 | Xbox one',
    category: 'Ação',
    infos: ['-10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    title: 'Resident Evil 4',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'PS5 | PC | Xbox S/X',
    category: 'Ação',
    infos: ['-5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    title: 'Fifa 23',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    system: 'PS4 | Xbox one',
    category: 'Esports',
    infos: ['-50%', 'R$ 99,00'],
    image: fifa
  },
  {
    id: 4,
    title: 'Fifa 23',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    system: 'PS5 | PC | Xbox S/X',
    category: 'Esports',
    infos: ['-25%', 'R$ 149,00'],
    image: fifa
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Diablo IV',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    system: 'PS5 | PC | Xbox S/X',
    category: 'RPG',
    infos: ['05/07'],
    image: diablo
  },
  {
    id: 6,
    title: 'Star Wars Jedi Survivor',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    system: 'PS5 | PC | Xbox S/X',
    category: 'Aventura',
    infos: ['25/09'],
    image: starWars
  },
  {
    id: 3,
    title: 'Street Fighter 6',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    system: 'PS5 | PC | Xbox S/X',
    category: 'Esports',
    infos: ['28/06'],
    image: streetFighter
  },
  {
    id: 8,
    title: 'The Legend of Zelda',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    system: 'Switch',
    category: 'RPG',
    infos: ['10/10'],
    image: zelda
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductList games={promocao} title="Promoções" background="gray" />
      <ProductList games={emBreve} title="Em Breve" background="black" />
    </>
  )
}

export default Home
