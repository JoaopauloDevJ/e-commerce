import Tag from '../Tag'

import * as S from './styles'

const Product = () => (
  <S.Card>
    <img src="//placehold.it/222x250" />
    <S.Titulo>Nome do jogo</S.Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <S.Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquid
      numquam molestiae fugit tempore quam asperiores maiores accusamus in.
      Magni nisi consectetur ipsum eligendi. Dolore culpa omnis doloremque iure
      alias.
    </S.Descricao>
  </S.Card>
)

export default Product
