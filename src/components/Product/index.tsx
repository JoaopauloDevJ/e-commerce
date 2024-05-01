import Tag from '../Tag'

import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  category,
  description,
  infos,
  image,
  system,
  title
}: Props) => (
  <S.Card>
    <img src={image} title={title} />
    <S.Infos>
      {infos.map((infos) => (
        <Tag key={infos}>{infos}</Tag>
      ))}
    </S.Infos>
    <S.Titulo>{title}</S.Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <S.Descricao>{description}</S.Descricao>
  </S.Card>
)

export default Product
