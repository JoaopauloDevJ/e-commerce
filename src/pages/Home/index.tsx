import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItems {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItems[]
  }
}

const Home = () => {
  const { data: onSaleGame } = useGetOnSaleQuery()
  const { data: soonGame } = useGetSoonQuery()

  if (onSaleGame && soonGame) {
    return (
      <>
        <Banner />
        <ProductList
          games={onSaleGame}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <ProductList
          games={soonGame}
          title="Em Breve"
          background="black"
          id="coming-soon"
        />
      </>
    )
  }

  return <h2>Carregando...</h2>
}

export default Home
