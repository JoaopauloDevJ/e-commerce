class Game {
  title: string
  category: string
  system: string
  image: string
  infos: string[]
  description: string
  id: number

  constructor(
    id: number,
    title: string,
    category: string,
    system: string,
    image: string,
    infos: string[],
    description: string
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.system = system
    this.image = image
    this.infos = infos
    this.description = description
  }
}

export default Game
