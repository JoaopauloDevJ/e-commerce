import Section from '../Section'

import closeIcon from '../../assets/images/fechar.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'

import { useState } from 'react'
import { GalleryItems } from '../../pages/Home'

import * as S from './styles'

interface ModalState extends GalleryItems {
  isVisible: boolean
}

type Props = {
  defaultCover: string
  name: string
  items: GalleryItems[]
}

const Gallery = ({ defaultCover, name, items }: Props) => {
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
          {items.map((media, index) => (
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
      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={closeIcon} alt="Ícone de fechar" onClick={closeModal} />
          </header>
          {modal.url === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
