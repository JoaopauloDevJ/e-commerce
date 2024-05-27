import Tag from '../Tag'
import Button from '../Button'

import { formataPreco } from '../ProductsList/index'
import { useGetFeatureGameQuery } from '../../services/api'

import * as S from './style'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <S.Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Titulo>{game.name}</S.Titulo>
          <S.Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </S.Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveite
        </Button>
      </div>
    </S.Imagem>
  )
}

export default Banner
