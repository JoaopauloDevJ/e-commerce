import * as S from './style'
import Logo from '../../assets/images/logo.svg'
import Carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <S.HeadeBar>
    <div>
      <img src={Logo} alt="EPLAY" />
      <nav>
        <S.Links>
          <S.LinkItem>
            <a href="#">Categorias</a>
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
