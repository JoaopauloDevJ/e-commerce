import Tag from '../Tag'

import * as S from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  category,
  description,
  infos,
  image,
  system,
  title,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }

  return (
    <S.Card to={`/product/${id}`}>
      <img src={image} title={title} />
      <S.Infos>
        {infos.map((infos) => (
          <Tag key={infos}>{infos}</Tag>
        ))}
      </S.Infos>
      <S.Titulo>{title}</S.Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Descricao>{getDescription(description)}</S.Descricao>
    </S.Card>
  )
}

export default Product
