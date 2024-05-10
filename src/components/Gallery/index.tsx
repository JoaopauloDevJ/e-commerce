import * as S from './styles'
import Section from '../Section'
import galeriaImg1 from '../../assets/images/galeria.png'
import galeriaImg2 from '../../assets/images/galeria2.webp'
import galeriaImg3 from '../../assets/images/galeria4.jpg'
import imgModal from '../../assets/images/galeria5.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

type GalleryItems = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItems[] = [
  {
    type: 'image',
    url: galeriaImg1
  },
  {
    type: 'image',
    url: galeriaImg2
  },
  {
    type: 'image',
    url: galeriaImg3
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/1O6Qstncpnc?si=HAj4UaQqPdFeO0Nr'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (Item: GalleryItems) => {
    if (Item.type === 'image') return Item.url
    return defaultCover
  }

  const getMediaIcon = (Item: GalleryItems) => {
    if (Item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {mock.map((media, index) => (
            <S.Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} do ${name}`}
              />
              <S.Action>
                <img src={getMediaIcon(media)} />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} />
          </header>
          <img src={imgModal} />
        </S.ModalContent>
        <div className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default Gallery
