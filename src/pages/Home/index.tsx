import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import fifa from '../../assets/images/fifa.svg'
import streetFighter from '../../assets/images/streetfigth.png'

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
        <ProductList games={onSaleGame} title="Promoções" background="gray" />
        <ProductList games={soonGame} title="Em Breve" background="black" />
      </>
    )
  }

  return <h2>Carregando...</h2>
}

export default Home
