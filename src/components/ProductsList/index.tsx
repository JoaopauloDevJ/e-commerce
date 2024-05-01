import Product from '../Product'
import * as S from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ title, background }: Props) => (
  <div className="container">
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.List>
        <Product />
        <Product />
        <Product />
        <Product />
      </S.List>
    </S.Container>
  </div>
)

export default ProductList
