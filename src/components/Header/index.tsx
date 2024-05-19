import { Link } from 'react-router-dom'
import * as S from './style'
import Logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducer/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeadeBar>
      <div>
        <Link to="/">
          <img src={Logo} alt="EPLAY" />
        </Link>
        <nav>
          <S.Links>
            <S.LinkItem>
              <Link to="/categories">Categorias</Link>
            </S.LinkItem>
            <S.LinkItem>
              <a href="#">Novidades</a>
            </S.LinkItem>
            <S.LinkItem>
              <a href="#">Promoções</a>
            </S.LinkItem>
          </S.Links>
        </nav>
      </div>
      <S.ButtonCart onClick={openCart}>
        {items.length} - Produto(s)
        <img src={Carrinho} alt="carrinho" />
      </S.ButtonCart>
    </S.HeadeBar>
  )
}

export default Header
