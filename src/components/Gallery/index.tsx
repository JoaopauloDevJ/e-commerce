import * as S from './styles'
import Section from '../Section'
import galeriaImg1 from '../../assets/images/galeria.png'
import galeriaImg2 from '../../assets/images/galeria2.webp'
import galeriaImg3 from '../../assets/images/galeria4.jpg'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'
import { useState } from 'react'

interface GalleryItems {
  type: 'image' | 'video'
  url: string
}

interface ModalState extends GalleryItems {
  isVisible: boolean
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
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (Item: GalleryItems) => {
    if (Item.type === 'image') return Item.url
    return defaultCover
  }

  const getMediaIcon = (Item: GalleryItems) => {
    if (Item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {mock.map((media, index) => (
            <S.Item
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
              key={media.url}
            >
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
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} onClick={() => closeModal()} />
          </header>
          {modal.url === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
