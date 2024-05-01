import Product from '../Product'
import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ title, background }: Props) => (
  <S.Container background={background}>
    <div className="container">
      <S.Title>{title}</S.Title>
      <S.List>
        <Product
          title="Resident Evil 4"
          category="Ação"
          system="PS4"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          description="Jogos de ação em terceira pessoa!"
        />
        <Product
          title="Resident Evil 4"
          category="Ação"
          system="PS4"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          description="Jogos de ação em terceira pessoa!"
        />
        <Product
          title="Resident Evil 4"
          category="Ação"
          system="PS4"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          description="Jogos de ação em terceira pessoa!"
        />
        <Product
          title="Resident Evil 4"
          category="Ação"
          system="PS4"
          image="//placehold.it/222x250"
          infos={['-10%', 'R$ 150,00']}
          description="Jogos de ação em terceira pessoa!"
        />
      </S.List>
    </div>
  </S.Container>
)

export default ProductList
