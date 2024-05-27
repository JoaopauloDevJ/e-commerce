import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducer/Cart'
import { formataPreco } from '../ProductsList'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrices = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((items) => (
            <S.CartItem key={items.id}>
              <img src={items.media.thumbnail} alt={items.name} />
              <div>
                <h3>{items.name}</h3>
                <Tag>{items.details.category}</Tag>
                <Tag>{items.details.system}</Tag>
                <span>{formataPreco(items.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(items.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {formataPreco(getTotalPrices())}
          <span>em até 6x sem juros</span>
        </S.Prices>
        <Button title="Clique aqui para completar a compra" type="button">
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
