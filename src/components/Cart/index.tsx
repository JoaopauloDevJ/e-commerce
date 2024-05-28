import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducer/Cart'

import * as S from './styles'
import { parseToBrl, getTotalPrices } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
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
                <span>{parseToBrl(items.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(items.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {parseToBrl(getTotalPrices(items))}
          <span>em até 6x sem juros</span>
        </S.Prices>
        <Button
          onClick={goToCheckout}
          title="Clique aqui para completar a compra"
          type="button"
        >
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
