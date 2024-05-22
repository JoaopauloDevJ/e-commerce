import * as S from './styles'

export type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => {
  return (
    <S.container>
      <h2>{title}</h2>
      {children}
    </S.container>
  )
}

export default Card
