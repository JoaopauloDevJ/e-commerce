import { Link } from 'react-router-dom'
import * as S from './style'
import Logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
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
    <S.LinkCart href="#">
      0 - Produto(s)
      <img src={Carrinho} alt="carrinho" />
    </S.LinkCart>
  </S.HeadeBar>
)

export default Header
