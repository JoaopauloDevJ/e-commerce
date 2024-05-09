import * as S from './styles'
import Section from '../Section'
import galeriaImg1 from '../../assets/images/galeria.png'
import galeriaImg2 from '../../assets/images/galeria2.webp'
import galeriaImg3 from '../../assets/images/galeria3.jpg'
import galeriaImg4 from '../../assets/images/galeria4.jpg'

const Gallery = () => {
  return (
    <Section title="Galeria" background="black">
      <S.Items>
        <S.Item>
          <img src={galeriaImg1} alt="Imagem do link" />
        </S.Item>
        <S.Item>
          <img src={galeriaImg2} alt="Imagem do link" />
        </S.Item>
        <S.Item>
          <img src={galeriaImg3} alt="Imagem do link" />
        </S.Item>
        <S.Item>
          <img src={galeriaImg4} alt="Imagem do link" />
        </S.Item>
      </S.Items>
    </Section>
  )
}

export default Gallery
