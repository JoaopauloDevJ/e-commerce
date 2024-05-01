import Game from '../../models/game'
import Product from '../Product'
import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductList = ({ title, background, games }: Props) => (
  <S.Container background={background}>
    <div className="container">
      <S.Title>{title}</S.Title>
      <S.List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            category={game.category}
            system={game.system}
            image={game.image}
            infos={game.infos}
            description={game.description}
          />
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default ProductList
